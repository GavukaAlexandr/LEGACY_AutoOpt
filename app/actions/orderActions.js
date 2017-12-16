import { push } from 'react-router-redux';
import * as types from './actionTypes';
import { showModalSuccess } from './modalActions';
import { showAlertSuccess, hideAlertSuccess } from './alertActions';
import orderService from '../services/orderService';

export function loadOrderSuccess(orders) {
  return {
    type: types.LOAD_ORDER_SUCCESS,
    orders
  };
}

export function getOrderSuccess(order) {
  return {
    type: types.GET_ORDER_SUCCESS,
    order
  };
}

export function savingOrder(status = true) {
  return {
    type : types.SAVING_ORDER,
    savingOrder: status
  };
}

export function createOrderSuccess(order) {
  return {
    type: types.CREATE_ORDER_SUCCESS,
    order
  };
}

export function updateOrderSuccess(order) {
  return {
    type: types.UPDATE_ORDER_SUCCESS,
    order
  };
}

export function requestOrderId(orderId) {
  return dispatch => {
    dispatch({
      type: types.REQUEST_ORDER_ID,
      orderToDelete:  orderId
    });
    dispatch(showModalSuccess('orderDeleteModal'));
  };
}

export function deleteOrderSuccess(orderId) {
  return {
    type: types.DELETE_ORDER_SUCCESS,
    orderId
  };
}

export function loadOrders() {
  return dispatch => {
    dispatch(hideAlertSuccess());
    return orderService.loadOrders()
      .then(data => dispatch(loadOrderSuccess(data)))
      .catch(error => dispatch(showAlertSuccess(error.description, 'error')));
  };
}

export function getOrder(id, showORDERDetails = false) {
  return (dispatch, getState) => {
    dispatch(hideAlertSuccess());
    return orderService.getOrder(id)
      .then(order => {
        dispatch(getOrderSuccess(order));
        if (showORDERDetails) {
          dispatch(showModalSuccess('orderDetailsModal'));
        }
      })
      .catch(error => dispatch(showAlertSuccess(error.description, 'error')));
  };
}

export function createOrder(order) {
  return (dispatch, getState) => {
    dispatch(hideAlertSuccess());
    dispatch(savingOrder());
    return orderService.createOrder(order)
      .then(createdOrder => {
        dispatch(createOrderSuccess(createdOrder));
        dispatch(savingOrder(false));
        dispatch(showAlertSuccess('Order created successfully', 'success'));
        dispatch(push('/app/orders'));
      })
      .catch(error => {
        dispatch(savingOrder(false));
        dispatch(showAlertSuccess(error.description, 'error'));
      });
  };
}

export function updateOrder(order) {
  return (dispatch, getState) => {
    dispatch(hideAlertSuccess());
    dispatch(savingOrder());
    return orderService.updateOrder(order)
      .then(updatedOrder => {
        dispatch(updateOrderSuccess(updatedOrder));
        dispatch(savingOrder(false));
        dispatch(showAlertSuccess('Order updated successfully', 'success'));
        dispatch(push('/app/orders'));
      })
      .catch(error => {
        dispatch(savingOrder(false));
        dispatch(showAlertSuccess(error.description, 'error'));
      });
  };
}

export function deleteOrder(id) {
  return (dispatch, getState) => {
    dispatch(hideAlertSuccess());
    return orderService.deleteOrder(id)
      .then(() => {
        dispatch(deleteOrderSuccess(id));
        dispatch(showAlertSuccess('Order removed', 'success'));
      })
      .catch(error => dispatch(showAlertSuccess(error.description, 'error')));
  };
}
