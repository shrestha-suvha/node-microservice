import Product from './model';
import CustomError from '../util/CustomError';
import { IProduct } from './type';

export const createProduct = async (product: IProduct) => {
    if (!product) throw new CustomError('All input value is required', 400);
    return (await Product.create(product)).toJSON();
};

export const getProduct = async (authId: string) => {
    const product = await Product.find({ authId }).exec();
    if (product?.length) return product
    throw new CustomError('Product not found', 404);
};
