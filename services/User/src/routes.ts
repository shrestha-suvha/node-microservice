import { Router } from 'express';

import * as UserController from './User/controller';

const router = Router();

const routes = () => {
    router.post('/createUser', UserController.createUser);
    router.get('/getUser', UserController.getUser);
    router.get('*', function(req, res){
        res.status(404).send('Path not found');
      });
    return router;
};

export default routes;
