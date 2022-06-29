import * as dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || '',
    dbUrl: process.env.DB_URI||'',
};
