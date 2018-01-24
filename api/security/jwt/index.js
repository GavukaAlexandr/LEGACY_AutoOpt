import { Router } from 'express';
import controller from './jwt.controller.js';
import jwt from 'express-jwt';
import config from 'config';


let router = new Router();

router.use('/api', jwt({ secret: config.security.secretkey}).unless({path: ["/api/login", "/api/orders" /* WHITE LIST FOR PATHS [ string URL or regexp ]*/]}));
router.use(controller.unauthenticatedRequestsHandler);
router.post('/api/login', controller.login);

module.exports = router;
