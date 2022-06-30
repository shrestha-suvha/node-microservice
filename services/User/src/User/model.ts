import mongoose from 'mongoose';

import { IUser } from './type';

const userSchema = new mongoose.Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        location: { type: String , required: true},
        contactNo: { type: String , required: true},
        authId: { type: String, required: true },
    },
    { timestamps: true },
);

export default mongoose.model<IUser>('User', userSchema);
