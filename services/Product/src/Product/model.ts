import mongoose from 'mongoose';

import { IProduct } from './type';

const productSchema = new mongoose.Schema(
    {
        productName: { type: String, required: true },
        description: { type: String, required: true },
        serialNumber: { type: String , required: true},
        authId: { type: String, required: true },
    },
    { timestamps: true },
);

export default mongoose.model<IProduct>('Product', productSchema);
