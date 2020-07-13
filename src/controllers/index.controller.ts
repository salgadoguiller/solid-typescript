import * as express from 'express';
import { Request, Response } from 'express';

import { ProxyUserDocument } from '../index/document';
import {
  UserData,
  UserDataFactory
} from '../index/user';
import {
  ErrorSubject,
  ErrorByEmailObserver,
  WriteErrorObserver
} from '../index/error';

import IBaseController from '../interfaces/base-controller.interface';

class IndexController implements IBaseController {
  public router = express.Router();

  constructor() {
    this.initRoutes();
  }

  public initRoutes() {
    this.router.post('/index', this.index);
  }

  index = (req: Request, res: Response) => {
    const profileId = req.body.profileId;
    const dataFrom = req.body.dataFrom;

    const subj = new ErrorSubject();
    new ErrorByEmailObserver(subj);
    new WriteErrorObserver(subj);

    let userData: UserData | undefined;
    userData = UserDataFactory.getUserData(dataFrom, profileId);

    let status = 200;
    let statusMessage = 'Success';

    if (userData === undefined) {
      status = 404;
      statusMessage = `Data from <${dataFrom}> not found`;

      subj.error = statusMessage;
    } else {
      const userDocument = new ProxyUserDocument(userData);
      const correctlyIndexed = userDocument.index();

      if (!correctlyIndexed) {
        status = 500;
        statusMessage = `User <${profileId}> can not be indexed`;

        subj.error = statusMessage;
      }
    }

    res.status(status);
    res.send({ status: statusMessage });
  }
}

export default IndexController;
