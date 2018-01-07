import React, { Component } from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

class OrderList extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {};
  }
  render() {
    const { orders } = this.props;
    return (
      <div className="order-list-table">
        <ReactTable
          data={orders}
          columns={[
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
                  accessor: d => (d.autoParts.new ? "Да" : "Нет"),
                  width: 60,
                },
                {
                  Header: "Б/У",
                  id: "autoParts.used",
                  accessor: d => (d.autoParts.used ? "Да" : "Нет"),
                  width: 40,
                },
                {
                  Header: "Оригинал",
                  id: "autoParts.original",
                  accessor: d => (d.autoParts.original ? "Да" : "Нет"),
                  width: 60,
                },
                {
                  Header: "Не оригинал",
                  id: "autoParts.notOriginal",
                  accessor: d => (d.autoParts.notOriginal ? "Да" : "Нет"),
                  width: 100,
                }
              ]
            },
            {
              Header: "Пользователь",
              columns: [
                {
                  Header: "Имя",
                  accessor: "user.name",
                  width: 100,
                },
                {
                  Header: "Email",
                  accessor: "user.email",
                  width: 150,
                },
                {
                  Header: "Телефон",
                  accessor: "user.phone",
                  width: 100,
                }
              ]
            },
            {
              Header: "Уведомления",
              columns: [
                {
                  Header: "Viber",
                  id: "getResponse.viber",
                  accessor: d => (d.getResponse.viber ? "Да" : "Нет"),
                  width: 45,
                },
                {
                  Header: "Звонок",
                  id: "getResponse.call",
                  accessor: d => (d.getResponse.call ? "Да" : "Нет"),
                  width: 60,
                },
                {
                  Header: "email",
                  id: "getResponse.email",
                  accessor: d => (d.getResponse.email ? "Да" : "Нет"),
                  width: 45,
                },
                {
                  Header: "whatsapp",
                  id: "whatsapp",
                  accessor: d => (d.getResponse.whatsapp ? "Да" : "Нет"),
                  width: 75,
                }
              ]
            },
            {
              Header: " ",
              columns: [
                {
                  Header: "Тип",
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
                  Header: "Кузов",
                  accessor: "carParameters.bodyType"
                },
                {
                  Header: "Привод",
                  accessor: "carParameters.carDrive"
                },
                {
                  Header: "VIN",
                  accessor: "carParameters.vinNumber"
                }
              ]
            },
            {
              Header: "Трансмиссия",
              columns: [
                {
                  Header: "Механика",
                  id: "carParameters.transmission.mechanics",
                  accessor: d =>
                    d.carParameters.transmission.mechanics ? "Да" : "Нет",
                  width: 75,
                },
                {
                  Header: "Автомат",
                  id: "carParameters.transmission.automatic",
                  accessor: d =>
                    d.carParameters.transmission.automatic ? "Да" : "Нет",
                  width: 70,
                }
              ]
            },
            {
              Header: "Топливо",
              columns: [
                {
                  Header: "Бензин",
                  id: "carParameters.fuel.gasoline",
                  accessor: d => (d.carParameters.fuel.gasoline ? "Да" : "Нет"),
                  width: 58,
                },
                {
                  Header: "Дизель",
                  id: "carParameters.fuel.diesel",
                  accessor: d => (d.carParameters.fuel.diesel ? "Да" : "Нет"),
                  width: 60,
                },
                {
                  Header: "Электро",
                  id: "carParameters.fuel.electro",
                  accessor: d => (d.carParameters.fuel.electro ? "Да" : "Нет"),
                  width: 65,
                },
                {
                  Header: "Гибрид",
                  id: "carParameters.fuel.gybrid",
                  accessor: d => (d.carParameters.fuel.gybrid ? "Да" : "Нет"),
                  width: 60,
                }
              ]
            },
          ]
        }
          defaultPageSize={10}
          className="-striped -highlight"
        />
      </div>
    );
  }
}

export default OrderList;
