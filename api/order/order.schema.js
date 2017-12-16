import mongoose from 'mongoose';
import { Stream } from 'stream';

const orderSchema = mongoose.Schema({
  dateTime: Date,         // Дата запроса
  user: {
    name: String,         // Имя клиента
    email: String,        // Почта
    phone: Number,        // Телефон
  },
  getResponse: {           // Ответ по заказу
    viber: Boolean,       
    call: Boolean,
    email: Boolean,
    whatsapp: Boolean,
  },         
  carParameters: {
    transportType: String,  // Тип транспорта
    brand: String,          // Марка
    model: String,          // Модель
    releaseYear: Date,      // Год выпуска  
    engineCapacity: Number, // Объем двигателя
    bodyType: String,       // Тип кузова
    carDrive: String,       // Привод
    vinNumber: String,      // VIN-номер  
    transmission: {         // ТРАНСМИССИЯ
      mechanics: Boolean,   // Механика
      automatic: Boolean,   // Автомат 
    },
    fuel: {                 // ТОПЛИВО
      gasoline: Boolean,    // Бензин
      diesel: Boolean,      // Дизель
      electro: Boolean,     // Электро
      gybrid: Boolean,      // Гибрид
    },
  },
  autoParts: {            // Запчасть
    name: String,         // Наименование запчасти
    new: Boolean,         // Новая
    used: Boolean,         // Б/У
    original: Boolean,    // Оригинал
    notOriginal: Boolean, // Не оригинал
  },
});

orderSchema.set('toJSON', { getters: true, versionKey: false });

const Order = mongoose.model('Order', orderSchema);

export default Order;
