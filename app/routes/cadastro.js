module.exports = function(app) {
  app.get('/cadastro',(req, res) => {
    app.app.controllers.cadastro.cadastro(app, req, res);
  });  
};
