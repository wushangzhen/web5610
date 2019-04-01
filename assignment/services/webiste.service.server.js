module.exports=function (app) {
    app.get("/api/user/:userId/website", findWebsiteForUser);
    app.post("/api/user/:userId/website", createWebsite);
    app.delete("/api/user/:userId/website/:websiteId", deleteWebsite);
    app.get("/api/website/:websiteId", findWebsiteById);
    app.put("/api/user/:userId/website/:websiteId", updateWebsiteById);

    var websiteModel = require('../model/website/website.model.server');

    function updateWebsiteById(req, res){
        // var userId = req.params['userId'];
        var websiteId = req.params['websiteId'];
        var newWebSite = req.body;
        websiteModel.updateWebsite(websiteId, newWebSite)
            .then(
            function (website) {
                res.json(website);
            },
            function (error) {
                res.statusCode(400).send(error);
            }
        );
        // websiteModel
        //     .updateWebsite(websiteId,user)
        //     .then(
        //         function (user) {
        //             res.json(user);
        //         },
        //         function (err) {
        //             res.statusCode(400).send(err);
        //         }
        //     );
    }

    function findWebsiteById(req, res){
        var websiteId = req.params['websiteId'];
        websiteModel.findWebsiteById(websiteId).then(
            function (website) {
                res.json(website);
            },
            function (error) {
                res.statusCode(400).send(error);
            }
        );
        // res.json(getWebsiteById(websiteId));
    }

    function deleteWebsite(req, res){
        var websiteId = req.params['websiteId'];
        websiteModel.deleteWebsite(websiteId).then(
            function (website) {
                res.json(website);
            },
            function (error) {
                res.statusCode(400).send(error);
            }
        );
    }

    function createWebsite(req, res){
        var userId = req.params['userId'];
        var website = req.body;
        websiteModel.createWebsite(userId,website)
            .then(
                function (website) {
                    res.json(website);
                },
                function (error) {
                    res.statusCode(400).send(error);
                }
            );
    }

    function findWebsiteForUser(req, res) {
        var userId = req.params['userId'];
        websiteModel.findAllWebsiteForUser(userId).then(
            function (websites) {
                res.json(websites);
            },
            function (error) {
                res.statusCode(400).send(error);
            }
        );
    }
}
