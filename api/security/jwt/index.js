import { Router } from 'express';
import controller from './jwt.controller.js';

var router = new Router();

router.post('/api/login', controller.login);
// router.get('/api/users/:id', controller.findById);
// router.post('/api/users', controller.create);
// router.put('/api/users/:id', controller.update);
// router.delete('/api/users/:id', controller.delete);

module.exports = router;
