import { Router } from 'express';
import controller from './order.controller';

let router = new Router();

router.get('/api/orders', controller.findAll);
router.get('/api/orders/:id', controller.findById);
router.post('/api/orders', controller.create);
router.put('/api/orders/:id', controller.update);
router.delete('/api/orders/:id', controller.delete);


module.exports = router;
