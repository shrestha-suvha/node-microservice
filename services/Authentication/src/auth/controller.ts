import { RequestHandler } from 'express';

import * as AuthService from './service';
import CustomError from '../util/CustomError';

export const register: RequestHandler = async (req, res) => {
    try {
        const { email, password } = req.body;
        const auth = await AuthService.register(email, password);
        res.status(201).json(auth);
    } catch (e) {
        if (e instanceof CustomError) {
            res.status(e.statusCode).send(e.message);
        }
    }
};

export const login: RequestHandler = async (req, res) => {
    try {
        const { email, password } = req.body;
        const auth = await AuthService.login(email, password);
        res.status(201).json(auth);
    } catch (e) {
        if (e instanceof CustomError) {
            res.status(e.statusCode).send(e.message);
        }
    }
};

export const verifyToken: RequestHandler = async (req, res) => {
    try {
        const { token } = req.body;
        const decodeToken = await AuthService.verifyToken(token);
        res.status(201).json(decodeToken);
    } catch (e) {
        if (e instanceof CustomError) {
            res.status(e.statusCode).send(e.message);
        }
    }
};
