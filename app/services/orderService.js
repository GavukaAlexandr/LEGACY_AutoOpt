import fetch from "isomorphic-fetch";
import * as endpoints from "./apiEndpoints";
import HEADERS from "./headers";

const HOST = `http://${window.location.host}`;
const API_BASE_URL = `${HOST}/api`;

class OrderService {
  static loadOrders() {
    const options = {
      method: "GET",
      headers: HEADERS(),
    };

    const request = new Request(
      `${API_BASE_URL}${endpoints.GET_ORDERS}`,
      options
    );

    return fetch(request).then(response => response.json());
  }

  static getOrder(id) {
    const request = new Request(
      `${endpoints.BASE_URL}${endpoints.GET_ORDER}/${id}`,
      {
        method: "GET",
        headers: HEADERS(),
      }
    );

    return fetch(request).then(response => response.json());
  }

  static createOrder(order) {
    const request = new Request(
      `${endpoints.BASE_URL}${endpoints.POST_ORDER}`,
      {
        method: "POST",
        headers: HEADERS(),
        body: JSON.stringify({
          order: order
        })
      }
    );

    return fetch(request).then(response => response.json());
  }

  static updateOrder(order) {
    const request = new Request(
      `${endpoints.BASE_URL}${endpoints.PUT_ORDER}/${order.id}`,
      {
        method: "PUT",
        headers: HEADERS(),
        body: JSON.stringify({
          order: order
        })
      }
    );

    return fetch(request).then(response => response.json());
  }

  static deleteOrder(id) {
    const request = new Request(
      `${endpoints.BASE_URL}${endpoints.DELETE_ORDER}/${id}`,
      {
        method: "DELETE",
        headers: HEADERS(),
      }
    );

    return fetch(request);
  }
}

export default OrderService;
