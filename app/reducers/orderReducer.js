import * as types from '../actions/actionTypes';
import initialState from './initialState';

export const orders = (state = initialState, action) => {
  switch (action.type) {
    case types.LOAD_ORDER_SUCCESS:
      return Object.assign({}, state, {
        orders: action.orders
      });

    case types.CREATE_ORDER_SUCCESS:
      return Object.assign({}, state, {
        orders: [
          ...state.orders,
          Object.assign({}, action.order)
        ].sort((a, b) => {
          return a.id - b.id; // Sort by id alphabetically.
        })
      });

    case types.UPDATE_ORDER_SUCCESS:
      return Object.assign({}, state, {
        orders: [
          ...state.orders.map(order => {
            if (order.id === action.order.id) {
              return {...order, orderState: action.order.orderState};
            } else {
              return order;
            }
            }),
        ]
      });

    case types.DELETE_ORDER_SUCCESS:
      return Object.assign({}, state, {
        orders: [
          ...state.orders.filter(order => order.id !== action.orderId)
        ]
      });

    default:
      return state;
  }
};

export const order = (state = initialState.order, action) => {
  switch (action.type) {
    case types.GET_ORDER_SUCCESS:
      return action.order;

    default:
      return state;
  }
};

export const savingOrder = (state = initialState.savingOrder, action) => {
  switch (action.type) {
    case types.SAVING_ORDER:
      return action.savingOrder;

    default:
      return state;
  }
};

export const orderToDelete = (state = initialState.orderToDelete, action) => {
  switch (action.type) {
    case types.REQUEST_ORDER_ID:
      return action.orderToDelete;

    default:
      return state;
  }
};

