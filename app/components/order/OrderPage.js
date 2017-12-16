import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import autoBind from '../../lib/autoBind';
import * as orderActions from '../../actions/orderActions';
import * as modalActions from '../../actions/modalActions';
import * as alertActions from '../../actions/alertActions';
import OrderList from './OrderList';
import Modal from '../common/Modal';
import ConfirmModal from '../common/ConfirmModal';
import { alertMessage } from '../../helpers';

export class OrderPage extends Component {
  constructor(props, context) {
    super(props, context);

    autoBind(this, {
      bindOnly: ['onClickDetail', 'onClickDelete', 'handleDelete']
    });

    props.actions.loadOrders();
  }

  componentWillUpdate(nextProps) {
    if (nextProps.alert !== this.props.alert) {
      alertMessage(nextProps.alert);
    }
  }

  onClickDetail(orderId) {
    this.props.actions.getOrder(orderId, true);
  }

  onClickDelete(orderId) {
    this.props.actions.requestOrderId(orderId);
  }

  handleDelete() {
    this.props.actions.deleteOrder(this.props.orderToDelete);
  }

  render() {
    return (
      <div>
        {/* <Link to="/app/orders/add">Add</Link> */}
        <OrderList
          orders={this.props.orders}
          onClickDetail={this.onClickDetail}
          onClickDelete={this.onClickDelete}
        />
        <Modal
          id="orderDetailsModal"
          title="Order Info"
          body={this.props.order.name}
          modal={this.props.modal}
          close={this.props.actions.hideModal}
        />
        <ConfirmModal
          id="orderDeleteModal"
          title="Delete Order"
          body="Are you sure you want to delete this order?"
          modal={this.props.modal}
          close={this.props.actions.hideModal}
          confirm={this.handleDelete}
        />
      </div>
    );
  }
}

OrderPage.propTypes = {
  actions: PropTypes.object,
  alert: PropTypes.object,
  modal: PropTypes.object,
  orderToDelete: PropTypes.string,
  orders: PropTypes.array.isRequired,
  order: PropTypes.object.isRequired
};

function mapStatesToProps(state, ownProps) {
  return {
    state: state.reducers,
    alert: state.reducers.alert,
    modal: state.reducers.modal,
    orderToDelete: state.reducers.orderToDelete,
    orders: state.reducers.orders.orders,
    order: state.reducers.order
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...orderActions, ...modalActions, ...alertActions}, dispatch)
  };
}

export default connect(mapStatesToProps, mapDispatchToProps)(OrderPage);
