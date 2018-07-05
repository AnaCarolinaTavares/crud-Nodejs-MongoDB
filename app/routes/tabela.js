module.exports = function(app) {
  app.get('/tabela',(req, res) => {
    app.app.controllers.tabela.tabela(app, req, res);
  });
};