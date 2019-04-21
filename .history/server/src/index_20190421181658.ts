import * as express from 'express';
import { apiRouter } from './api';
import { appMiddleware, errorHandler } from './middleware';
import logger from './util/logger';

var bodyParser = require('body-parser');

let app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(appMiddleware(app));
app.use('/api/v0', apiRouter);
app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
})
app.use(errorHandler);

export default app;
