function AddApiRoutes(app) {
    app.use(require('./user/index.js'));
    app.use(require('./order/index.js'));
}
module.exports = function (app) {
    return new AddApiRoutes(app);
};