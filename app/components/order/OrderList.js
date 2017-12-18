import React, { Component } from "react";
import { PropTypes } from "prop-types";
import Order from "./Order";

import ReactTable from "react-table";
import "react-table/react-table.css";

class OrderList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      data: this.props
    };
  }
  render() {
    const { data } = this.state;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Имя",
              accessor: "userName"
            },
            {
              Header: "Email",
              accessor: "email"
            },
            {
              Header: "Телефон",
              accessor: "phone"
            },
            {
              Header: "Уведомления",
              accessor: "response"
            },

            {
              Header: "Тип",
              accessor: "transportType"
            },
            {
              Header: "Марка",
              accessor: "brand"
            },
            {
              Header: "Модель",
              accessor: "model"
            },
            {
              Header: "Год выпуска",
              accessor: "releaseYear"
            },
            {
              Header: "Объем двигателя",
              accessor: "engineCapacity"
            },
            {
              Header: "Тип кузова",
              accessor: "bodyType"
            },
            {
              Header: "Привод",
              accessor: "carDrive"
            },
            {
              Header: "Трансмиссия",
              accessor: "transmission"
            },
            {
              Header: "Топливо",
              accessor: "fuel"
            },
            {
              Header: "VIN",
              accessor: "vinNumber"
            },
            {
              Header: "Запчасть",
              accessor: "autoParts.name"
            },
            {
              Header: "Состояние",
              accessor: "..."
            }
          ]}
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

// const OrderList = ({ orders, onClickDetail, onClickDelete }) => {
//   let ordersView = (
//     <p>Sorry, there are no orders to show. You can try to add one.</p>
//   );
//   if (orders.length > 0) {
//     ordersView = orders.map(order => (
//       <Order
//         key={order.id}
//         id={order.id}
//         name={order.name}
//         onClickDetail={onClickDetail}
//         onClickDelete={onClickDelete}
//       />
//     ));
//   }
//   return <div>{ordersView}</div>;
// };

OrderList.propTypes = {
  orders: PropTypes.arrayOf(
    PropTypes.shape({
      // id: PropTypes.string.isRequired,
      // name: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onClickDetail: PropTypes.func.isRequired,
  onClickDelete: PropTypes.func.isRequired
};

export default OrderList;
