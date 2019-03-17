module.exports=function (app) {
    // app.get('/api/hello', helloWorld);
    // function helloWorld(req, res) {
    //     res.status(200).send("hello world ....");
    // }
    require('./services/user.service.server')(app);
    require('./services/page.service.server')(app);
    require('./services/webiste.service.server')(app);
    require('./services/widget.service.server')(app);
}
