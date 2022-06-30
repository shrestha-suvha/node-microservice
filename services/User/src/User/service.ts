import User from './model';
import CustomError from '../util/CustomError';
import { IUser } from './type';

export const createUser = async (user: IUser) => {
    if (!user) throw new CustomError('All input value is required', 400);
    const isUserExist = await User.findOne({ authId: user.authId }).exec();
    if (isUserExist)
        return (await User.findOneAndUpdate({ authId: user.authId }, user, { new: true }).exec())?.toJSON();
    else return (await User.create(user)).toJSON();
};

export const getUser = async (authId: string) => {
    const user = await User.findOne({ authId }).exec();
    if(user) return user.toJSON()
    throw new CustomError('User not found', 404) 
};
