import { Router } from 'express';

import config from './config/env'

const router = Router();

const routes = () => {
    router.all('/auth/*', (req, res)=> {
      res.redirect(307, config.authBaseUrl+req.path)
    })
    router.all('/user/*', (req, res)=> {
      res.redirect(307, config.userBaseUrl+req.path)
    })
    router.all('/product/*', (req, res)=> {
      res.redirect(307, config.productBaseUrl+req.path)
    })
    router.all('*', function(req, res){
        res.status(404).send('Path not found');
      });
    return router;
};

export default routes;
