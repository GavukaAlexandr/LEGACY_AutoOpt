import { Router } from 'express';
import controller from './jwt.controller.js';
import jwt from 'express-jwt';
import SECRET_KEY from './secretkey';


let router = new Router();

router.use('/api', jwt({ secret: SECRET_KEY}).unless({path: ["/api/login", "/api/orders" /* WHITE LIST FOR PATHS [ string URL or regexp ]*/]}));
router.use(controller.unauthenticatedRequestsHandler);
router.post('/api/login', controller.login);
// router.post('/api/users', controller.create);
// router.put('/api/users/:id', controller.update);
// router.delete('/api/users/:id', controller.delete);

module.exports = router;
