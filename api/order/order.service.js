import Order from './order.schema';

class OrderService {
  findAll(cb) {
    Order.find()
      .then(orders => cb(null, orders))
      .catch(err => cb('Unable to retrieve orders.'));
  }

  findById(id, cb) {
    Order.findById(id)
      .then(order => cb(null, order))
      .catch(err => cb('Unable to find order.'));
  }

  create(data, cb) {
    let order = new Order(data);
    order.save();
    return cb(null, order);
  }

  update(id, data, cb) {
    delete data.id;

    Order.findByIdAndUpdate(id, data, { new: true }) // Using { new: true } to return the modified document rather than the original.
      .then((order) => {
        if (!order) return cb(`The order doesn't exist.`);
        cb(null, order);
      })
      .catch(err => cb('Unable to update order.'));
  }

  delete(id, cb) {
    Order.findByIdAndRemove(id, { select: '_id' })
      .then((order) => {
        if (!order) return cb(`The order doesn't exist.`);
        cb(null, id);
      })
      .catch(err => cb('Unable to delete order.'));
  }
}

export default new OrderService();
