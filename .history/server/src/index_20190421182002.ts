import * as express from 'express';
import { apiRouter } from './api';
import { appMiddleware, errorHandler } from './middleware';
import logger from './util/logger';

let app = express();
app.use(appMiddleware(app));
app.use('/api/v0', apiRouter);
app.use(errorHandler);

export default app;
