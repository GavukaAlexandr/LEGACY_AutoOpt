import OrderService from './order.service';

class OrderController {
  findAll(req, res, next) {
      OrderService.findAll((err, response) => {
      if (err) return next(err);

      res.status(200).json(response);
    });
  }

  findById(req, res, next) {
    const id = req.params.id;

    OrderService.findById(id, (err, response) => {
      if (err) return next(err);

      res.status(200).json(response);
    });
  }

  create(req, res, next) {
    OrderService.create(req.body.order, (err, createdOrder) => {
      if (err) return next(err);

      res.status(200).json(createdOrder);
    });

    next();
  }

  update(req, res, next) {
    const id = req.params.id;
    const data = req.body.order;

    OrderService.update(id, data, (err, updatedOrder) => {
      if (err) return next(err);

      res.status(200).json(updatedOrder);
    });
  }

  delete(req, res, next) {
    const id = req.params.id;

    OrderService.delete(id, (err, deletedOrderId) => {
      if (err) return next(err);

      res.status(200).end();
    });
  }
}

export default new OrderController();
