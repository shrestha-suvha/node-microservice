import { Router } from 'express';

import * as UserController from './User/controller';

const router = Router();

const routes = () => {
    router.post('/createUser', UserController.createUser);
    router.get('/getUser', UserController.getUser);
    return router;
};

export default routes;
