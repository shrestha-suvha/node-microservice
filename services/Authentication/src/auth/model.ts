import mongoose from 'mongoose';

import { IAuth } from './type';

const authSchema = new mongoose.Schema({
    email: { type: String, unique: true },
    password: { type: String },
});
authSchema.methods.toJSON = function () {
    var obj = this.toObject();
    delete obj.password;
    return obj;
};
export default mongoose.model<IAuth>('Auth', authSchema);
