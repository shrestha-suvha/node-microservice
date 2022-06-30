import { Router } from 'express';

import * as productController from './Product/controller';

const router = Router();

const routes = () => {
    router.post('/createProduct', productController.createProduct);
    router.get('/getProduct', productController.getProduct);
    router.get('*', function(req, res){
        res.status(404).send('Path not found');
      });
    return router;
};

export default routes;
