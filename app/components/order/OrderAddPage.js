import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from '../../lib/autoBind';
import * as orderActions from '../../actions/orderActions';
import * as alertActions from '../../actions/alertActions';
import { alertMessage } from '../../helpers';
import OrderForm from './OrderForm';

class OrderAddPage extends Component {
  constructor(props, context) {
    super(props, context);

    autoBind(this, {
      bindOnly: ['handleSave']
    });
  }

  componentWillUpdate(nextProps) {
    if (nextProps.alert !== this.props.alert) {
      alertMessage(nextProps.alert);
    }
  }

  handleSave(order) {
    this.props.actions.createOrder(order);
  }

  render() {
    return (
      <div>
        <h1>Add Order</h1>
        <OrderForm
          onSave={this.handleSave}
          saving={this.props.savingOrder}
          order={this.props.order}
        />
      </div>
    );
  }
}

OrderAddPage.propTypes = {
  actions: PropTypes.object.isRequired,
  alert: PropTypes.object,
  savingOrder: PropTypes.bool,
  order: PropTypes.object
};

function mapStatesToProps(state, ownProps) {
  let order = {
    id: 0,
    name: ''
  };

  return {
    state: state.reducers,
    alert: state.reducers.alert,
    savingOrder: state.reducers.savingOrder,
    order: order
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...orderActions, ...alertActions}, dispatch)
  };
}

export default connect(mapStatesToProps, mapDispatchToProps)(OrderAddPage);
