import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

import Auth from './model';
import config from '../config/env';
import CustomError from '../util/CustomError';

export const register = async (email: string, password: string) => {
    if (!(email && password)) throw new CustomError('All input value is required', 400);
    const isAlreadyExist = await Auth.findOne({ email }).exec();
    if (isAlreadyExist) throw new CustomError('Email already exists', 409);
    const hashedPassword = await bcrypt.hash(password, 10);
    const auth = (
        await Auth.create({
            email,
            password: hashedPassword,
        })
    ).toJSON();
    const token = jwt.sign({ authId: auth._id, email }, config.accessTokenSecret, { expiresIn: '5h' });

    return { ...auth, token };
};

export const login = async (email: string, password: string) => {
    if (!(email && password)) throw new CustomError('All input value is required', 400);
    const auth = await Auth.findOne({ email }).exec();

    if (auth && (await bcrypt.compare(password, auth.password))) {
        const token = jwt.sign({ authId: auth._id, email }, config.accessTokenSecret, { expiresIn: '5h' });
        return { ...auth.toJSON(), token };
    }
    throw new CustomError('Incorrect email or password', 400);
};

export const verifyToken = async (token: string) => {
    if (!token) throw new CustomError('A token is required for authentication', 403);
    try {
        return jwt.verify(token, config.accessTokenSecret);
    } catch (err) {
        throw new CustomError('Invalid Token', 401);
    }
};
