import { RequestHandler } from 'express';

import * as UserService from './service';
import CustomError from '../util/CustomError';

export const createUser: RequestHandler = async (req, res) => {
    try {
        const user = await UserService.createUser({ ...req.body, authId: req.body.user.authId });
        res.status(201).json(user);
    } catch (e) {
        if (e instanceof CustomError) {
            res.status(e.statusCode).send(e.message);
        } else {
            res.status(400).send(e);
        }
    }
};

export const getUser: RequestHandler = async (req, res) => {
    try {
        const user = await UserService.getUser(req.body.user.authId);
        res.status(201).json(user);
    } catch (e) {
        if (e instanceof CustomError) {
            res.status(e.statusCode).send(e.message);
        } else {
            res.status(400).send(e);
        }
    }
};
