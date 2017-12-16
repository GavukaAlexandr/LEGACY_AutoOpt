import React, { Component } from 'react';
import { PropTypes } from 'prop-types';import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import autoBind from '../../lib/autoBind';
import * as orderActions from '../../actions/orderActions';
import * as alertActions from '../../actions/alertActions';
import { alertMessage } from '../../helpers';
import OrderForm from './OrderForm';

class OrderEditPage extends Component {
  constructor(props, context) {
    super(props, context);

    autoBind(this, {
      bindOnly: ['handleSave']
    });

    props.actions.getOrder(props.params.id);
  }

  componentWillUpdate(nextProps) {
    if (nextProps.alert !== this.props.alert) {
      alertMessage(nextProps.alert);
    }
  }

  handleSave(order) {
    let data = {
      id: this.props.order.id,
      name: order.name
    };

    this.props.actions.updateOrder(data);
  }

  render() {
    return (
      <div>
        <h1>Edit Order</h1>
        <OrderForm
          onSave={this.handleSave}
          saving={this.props.savingOrder}
          order={this.props.order}
        />
      </div>
    );
  }
}

OrderEditPage.propTypes = {
  actions: PropTypes.object.isRequired,
  alert: PropTypes.object,
  savingOrder: PropTypes.bool,
  order: PropTypes.object,
  params: PropTypes.object
};

function mapStatesToProps(state, ownProps) {
  return {
    state: state.reducers,
    alert: state.reducers.alert,
    savingOrder: state.reducers.savingOrder,
    order: state.reducers.order
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({...orderActions, ...alertActions}, dispatch)
  };
}

export default connect(mapStatesToProps, mapDispatchToProps)(OrderEditPage);
