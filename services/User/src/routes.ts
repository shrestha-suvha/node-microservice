import { Router } from 'express';

import * as UserController from './User/controller';

const router = Router();

const routes = () => {
    router.post('/create', UserController.createUser);
    router.get('/getDetail', UserController.getUser);
    return router;
};

export default routes;
