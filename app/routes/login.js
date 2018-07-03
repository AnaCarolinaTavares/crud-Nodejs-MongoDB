module.exports = function(app) {
    
    app.get('/login',(req, res) => {
    res.render("login/login");
    });
    
    app.post('/dashboard',(req, res) => {
    res.sender("ok");
    });
    
};
