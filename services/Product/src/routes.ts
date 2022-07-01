import { Router } from 'express';

import * as productController from './Product/controller';

const router = Router();

const routes = () => {
    router.post('/create', productController.createProduct);
    router.get('/getAll', productController.getProduct);
    return router;
};

export default routes;
