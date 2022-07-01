import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

import config from '../config/env';

interface IUser {
    authId: string;
    email: string;
}
interface ICustomAuthRequest extends Request {
    user?: IUser;
}
export const Authenticate = async (req: ICustomAuthRequest, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(403).send('A token is required for authentication');
    }
    try {
        const { data } = await axios({
            url: 'auth/verifyToken',
            baseURL: config.authBaseUrl,
            method: 'post',
            data: { token },
        });
        req.body.user = data;
        return next();
    } catch (err) {
        if(axios.isAxiosError(err)){
        res.status(err.response?.status||401).send(err.response?.data);}
    }
   
};
