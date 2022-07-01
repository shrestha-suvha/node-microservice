import express from 'express';
import bodyParser from 'body-parser';
import  morgan from 'morgan';
 

import config from './config/env';
import routes from './routes';

const app = express();
app.use(morgan(':method :url [:status] ---- :response-time ms'));
app.use(bodyParser.json());
app.use('/', routes());
app.listen(config.port, () => {
    console.log(`The application is listening on port ${config.port}!`);
});
