import React, { PureComponent } from "react";
import Button from "material-ui/Button";
import Menu, { MenuItem } from "material-ui/Menu";
import { PropTypes } from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import autoBind from "../../lib/autoBind";
import * as orderActions from "../../actions/orderActions";

class OrderState extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      anchorEl: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleClick(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleMenuItemClick(event, selected) {
    const orderUpdated = Object.assign({}, this.props.props.row._original, {
      orderState: selected.index
    });
    this.props.actions.updateOrder(orderUpdated);

    this.setState({
      anchorEl: null
    });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    const { anchorEl } = this.state;
    const options = {
      new: "Новый",
      handling: "Обработка",
      inProcess: "В процессе",
      sales: "Продано",
      bad: "Плохой"
    };
    const { orderId } = this.props.props.row._original;

    return (
      <div
        className="select-state"
        style={{
          width: "100%",
          height: "100%"
        }}
      >
        <Button
          aria-owns={anchorEl ? "simple-menu" : null}
          aria-haspopup="true"
          onClick={this.handleClick}
          style={{
            width: "100%",
            height: "100%"
          }}
          className={this.props.orderState}
          children={options[this.props.orderState]}
        />
        <Menu
          id={orderId}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {Object.entries(options).map(([index, option], i) => (
            <MenuItem
              key={index}
              onClick={event =>
                this.handleMenuItemClick(event, {
                  index: index,
                  option: option
                })
              }
            >
              {option}
            </MenuItem>
          ))}
        </Menu>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const { orders } = state.reducers.orders;
  const { id } = props.props.row._original;
  const order = orders.find(item => item.id === id);
  const { orderState } = order;

  return {
    orderState
  };
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...orderActions }, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OrderState);
