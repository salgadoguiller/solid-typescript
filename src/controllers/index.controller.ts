import * as express from 'express';
import { Request, Response } from 'express';

import { UserDocument } from '../index/document';
import { UserData, UserDataFromRequest, UserDataFromFile, UserDataFromDB } from '../index/user';

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

    let userData: UserData;
    switch (dataFrom) {
      case 'request':
        userData = new UserDataFromRequest(profileId);
        break;
      case 'file':
        userData = new UserDataFromFile(profileId);
        break;
      case 'db':
        userData = new UserDataFromDB(profileId);
        break;
      default:
        res.status(400);
        res.send({
          status: `Data from should be request, file or db. <${dataFrom}> was provided`
        });
        return;
        break;
    }

    const userDocument = new UserDocument(userData);
    userDocument.index();

    res.send({
      status: 'Success'
    });
  }
}

export default IndexController;
