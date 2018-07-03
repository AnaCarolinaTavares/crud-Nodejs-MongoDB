module.exports = function(app) {
  app.get('/tabela',(req, res) => {
    res.render("tabela/tabela");
  });
};