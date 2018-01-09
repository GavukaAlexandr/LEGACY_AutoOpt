import nodemailer from "nodemailer";

class EmailController {
  notify(req, res, next) {
    console.log(">>>>>>>>>>> email notify");

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "avto.opt.notify@gmail.com",
        pass: "AvtoOptNotify"
      }
    });

    const mailOptions = {
        from: 'avto.opt.notify@gmail.com', // sender address
        to: 'avto.opt.notify@gmail.com', // list of receivers
        subject: 'Получен новый заказ!', // Subject line
        html: 
        `<p>Клиент:</p>
        <p>Имя: ${req.body.order.user.name}</p>
        <p>Email: ${req.body.order.user.email}</p>
        <p>Телефон:${req.body.order.user.phone}</p>

        <p>Уведомление</p>
        <p>...Звонок: ${req.body.order.getResponse.call}</p>
        <p>...Email: ${req.body.order.getResponse.email}</p>
        <p>...Viber: ${req.body.order.getResponse.viber}</p>
        <p>...WhatsApp: ${req.body.order.getResponse.whatsapp}</p>

        <p>Название запчасти: ${req.body.order.autoParts.name}</p>
        <p>Состояние:</p>
        <p>...новая: ${req.body.order.autoParts.new}</p>
        <p>...Б/У: ${req.body.order.autoParts.used}</p>
        <p>...Оригинал: ${req.body.order.autoParts.original}</p>
        <p>...Не оригиал ${req.body.order.autoParts.notOriginal}</p>

        <p>Параметры авто:</p>
        <p>...Тип транспорта: ${req.body.order.carParameters.transportType}</p>
        <p>...Тип кузова: ${req.body.order.carParameters.bodyType}</p>
        <p>...Год выпуска: ${req.body.order.carParameters.releaseYear}</p>
        <p>...VIN: ${req.body.order.carParameters.vinNumber}</p>
        <p>...Бренд: ${req.body.order.carParameters.brand}</p>
        <p>...Модель: ${req.body.order.carParameters.model}</p>
        <p>...Привод: ${req.body.order.carParameters.carDrive}</p>
        <p>...Объем двигателя: ${req.body.order.carParameters.engineCapacity}</p>
        <p>...Топливо:</p>
        <p>......Бензин: ${req.body.order.carParameters.fuel.gasoline}</p>
        <p>......Дизель: ${req.body.order.carParameters.fuel.diesel}</p>
        <p>......Электро: ${req.body.order.carParameters.fuel.electro}</p>
        <p>......Гибрид: ${req.body.order.carParameters.fuel.gybrid}</p>
        <p>...Трансмиссия</p>
        <p>......Автомат: ${req.body.order.carParameters.transmission.automatic}</p>
        <p>......Механика: ${req.body.order.carParameters.transmission.mechanics}</p>`
      };

      transporter.sendMail(mailOptions, function (err, info) {
        if(err) {
            console.log(err);
        } else {
            console.log(info);
        }
     });

    next();
  }
}

export default new EmailController();
