import { RequestHandler } from 'express';

import * as productService from './service';
import CustomError from '../util/CustomError';

export const createProduct: RequestHandler = async (req, res) => {
    try {
        const user = await productService.createProduct({ ...req.body, authId: req.body.user.authId });
        res.status(201).json(user);
    } catch (e) {
        if (e instanceof CustomError) {
            res.status(e.statusCode).send(e.message);
        } else {
            res.status(400).send(e);
        }
    }
};

export const getProduct: RequestHandler = async (req, res) => {
    try {
        const user = await productService.getProduct(req.body.user.authId);
        res.status(201).json(user);
    } catch (e) {
        if (e instanceof CustomError) {
            res.status(e.statusCode).send(e.message);
        } else {
            res.status(400).send(e);
        }
    }
};
