module.exports = function(app) { 
    app.get('/dashboard',(req, res) => {
        app.app.controllers.dashboard.dashboard(app, req, res);
    });
    
    app.post('/dashboard',(req, res) => {
        let info = req.body;
        let nome = req.body.nome; 
        console.log(info);                
    });
};