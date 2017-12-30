import fetch from 'isomorphic-fetch';
import * as endpoints from './apiEndpoints';

class OrderService {
  constructor() {
    this.headers = {
      //TODO: add headers
    }
  }

  static loadOrders() {
    const request = new Request(`${endpoints.BASE_URL}${endpoints.GET_ORDERS}`, {
      method: 'GET'
    });

    return fetch(request).then(response => response.json());
  }

  static getOrder(id) {
    const request = new Request(`${endpoints.BASE_URL}${endpoints.GET_ORDER}/${id}`, {
      method: 'GET'
    });

    return fetch(request).then(response => response.json());
  }

  static createOrder(order) {
    const request = new Request(`${endpoints.BASE_URL}${endpoints.POST_ORDER}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order: order
      })
    });

    return fetch(request).then(response => response.json());
  }

  static updateOrder(order) {
    const request = new Request(`${endpoints.BASE_URL}${endpoints.PUT_ORDER}/${order.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        order: order
      })
    });

    return fetch(request).then(response => response.json());
  }

  static deleteOrder(id) {
    const request = new Request(`${endpoints.BASE_URL}${endpoints.DELETE_ORDER}/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    return fetch(request);
  }
}

export default OrderService;
