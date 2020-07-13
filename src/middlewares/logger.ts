import { Request, Response } from 'express';

const loggerMiddleware = (req: Request, resp: Response, next: Function) => {

  console.log('Request logged:', req.method, req.path);
  console.log('Response logged:', resp.contentType);
  next();
};

export default loggerMiddleware;
