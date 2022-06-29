import { Router } from 'express';

import * as AuthController from './auth/controller';

const router = Router();

const routes = () => {
    router.post('/register', AuthController.register);
    router.post('/login', AuthController.login);
    router.post('/verifyToken', AuthController.verifyToken);
    return router;
};

export default routes;
