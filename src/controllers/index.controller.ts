import * as express from 'express';
import { Request, Response } from 'express';

import { UserDocument } from '../index/document';
import {
  UserData,
  UserDataFactory
} from '../index/user';

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

    let userData: UserData | undefined;
    userData = UserDataFactory.getUserData(dataFrom, profileId);

    if (userData === undefined) {
      res.status(404);
      res.send({ status: `Data from <${dataFrom}> not found` });
      return;
    }

    const userDocument = new UserDocument(userData);
    userDocument.index();

    res.send({
      status: 'Success'
    });
  }
}

export default IndexController;
