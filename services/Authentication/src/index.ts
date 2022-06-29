import express from 'express';
import bodyParser from 'body-parser';

import config from './config/env';
import { connect } from './config/db';
import routes from './routes';

connect(); //db connect
const app = express();
app.use(bodyParser.json());

app.use('/', routes());
app.listen(config.port, () => {
    console.log(`The application is listening on port ${config.port}!`);
});
