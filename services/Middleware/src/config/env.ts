import * as dotenv from 'dotenv';

dotenv.config();

export default {
    port: process.env.PORT,
    authBaseUrl: process.env.AUTH_BASE_URL || '',
    userBaseUrl: process.env.USER_BASE_URL || '',
    productBaseUrl: process.env.PRODUCT_BASE_URL || '',
};
