import React, { Component } from "react";
import { PropTypes, element } from "prop-types";
import Order from "./Order";

import ReactTable from "react-table";
import "react-table/react-table.css";
import { orders } from "../../reducers/orderReducer";

class OrderList extends React.Component {
  constructor(props, context) {
    console.log("asdasdas")
    super(props, context);
    this.state = {};
    // const { orders, onClickDetail, onClickDelete } = this.props;
  }
    render() {
    // console.log(this.props)
    const { orders, onClickDetail, onClickDelete } = this.props;
    return (
      <div>
        <ReactTable
        className='order-list-table'
          data={orders}
          columns={[
            {
              Header: "Пользователь",
              columns: [
                {
                  Header: "Имя",
                  accessor: "user.name"
                },
                {
                  Header: "Email",
                  accessor: "user.email"
                },
                {
                  Header: "Телефон",
                  accessor: "user.phone"
                }
              ]
            },
            {
              Header: "Уведомления",
              columns: [
                {
                  Header: "Viber",
                  id: 'getResponse.viber',       
                  accessor: d => d.getResponse.viber ? "Да" : "Нет"
                },
                {
                  Header: "Звонок",
                  id: 'getResponse.call',
                  accessor: d => d.getResponse.call ? "Да" : "Нет"
                },
                {
                  Header: "email",
                  id: "getResponse.email",
                  accessor: d => d.getResponse.email ? "Да" : "Нет"
                },
                {
                  Header: "whatsapp",
                  id: "whatsapp",
                  accessor: d => d.getResponse.whatsapp ? "Да" : "Нет"
                }
              ]
            },

            {
              Header: "Тип кузова",
              accessor: "carParameters.transportType"
            },
            {
              Header: "Марка",
              accessor: "carParameters.brand"
            },
            {
              Header: "Модель",
              accessor: "carParameters.model"
            },
            {
              Header: "Год выпуска",
              accessor: "carParameters.releaseYear"
            },
            {
              Header: "Объем двигателя",
              accessor: "carParameters.engineCapacity"
            },
            {
              Header: "Тип кузова",
              accessor: "carParameters.bodyType"
            },
            {
              Header: "Привод",
              accessor: "carParameters.carDrive"
            },
            {
              Header: "VIN",
              accessor: "carParameters.vinNumber"
            },
            {
              Header: "Трансмиссия",
              columns: [
                {
                  Header: "Механика",
                  id: "carParameters.transmission.mechanics",
                  accessor: d => d.carParameters.transmission.mechanics ? "Да" : "Нет"
                },
                {
                  Header: "Автомат",
                  id: "carParameters.transmission.automatic",
                  accessor: d => d.carParameters.transmission.automatic ? "Да" : "Нет"
                }
              ]
            },
            {
              Header: "Топливо",
              columns: [
                {
                  Header: "Бензин",
                  id: "carParameters.fuel.gasoline",
                  accessor: d => d.carParameters.fuel.gasoline ? "Да" : "Нет"

                },
                {
                  Header: "Дизель",
                  id: "carParameters.fuel.diesel",
                  accessor: d => d.carParameters.fuel.diesel ? "Да" : "Нет"
                },
                {
                  Header: "Электро",
                  id: "carParameters.fuel.electro",
                  accessor: d => d.carParameters.fuel.electro ? "Да" : "Нет"
                },
                {
                  Header: "Гибрид",
                  id: "carParameters.fuel.gybrid",
                  accessor: d => d.carParameters.fuel.gybrid ? "Да" : "Нет"
                }
              ]
            },
            {
              Header: "Заказ",
              columns: [
                {
                  Header: "Запчасть",
                  accessor: "autoParts.name"
                },
                {
                  Header: "Новая",
                  id: "autoParts.new",
                  accessor: d => d.autoParts.new ? "Да" : "Нет"
                },
                {
                  Header: "Б/У",
                  id: "autoParts.used",
                  accessor: d => d.autoParts.used ? "Да" : "Нет"
                },
                {
                  Header: "Оригинал",
                  id: "autoParts.original",
                  accessor: d => d.autoParts.original ? "Да" : "Нет"
                },
                {
                  Header: "Не оригинал",
                  id: "autoParts.notOriginal",
                  accessor: d => d.autoParts.notOriginal ? "Да" : "Нет"
                }
              ]
            }
          ]}
          defaultPageSize={13}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

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
