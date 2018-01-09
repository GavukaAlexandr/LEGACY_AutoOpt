import { Router } from 'express';
import controller from './email.controller';


let router = new Router();

router.post('/api/orders', controller.notify);

module.exports = router;
