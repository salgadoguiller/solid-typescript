import App from './app';

import * as bodyParser from 'body-parser';
// import loggerMiddleware from './middlewares/logger';

import IndexController from './controllers/index.controller';

const app = new App({
  port: 8080,
  controllers: [
    new IndexController()
  ],
  middleWares: [
    bodyParser.json(),
    bodyParser.urlencoded({ extended: true }),
    // loggerMiddleware
  ]
});

app.listen();
