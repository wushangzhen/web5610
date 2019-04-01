module.exports=function (app) {
    app.put("/api/user/:userId", updateUserById);
    app.get("/api/user/hello", helloUser);
    app.get("/api/user/:userId", findUserById);
    app.get("/api/user/", findUserByCredentials);
    app.post("/api/user/", createUser);
    app.get("/api/username", findUserByUsername);
    app.delete("/api/user/:userId", deleteUser);

    var userModel = require('../model/user/user.model.server');

    function createUser(req, res) {
        var newUser = req.body;
        userModel.createUser(newUser).then(function(user) {
            console.log("create user!");
            res.send(user);
        }, function (error) {
            console.log("create user error: " + error);
            res.status(400);
        });
    }

    function helloUser(req, res) {
        res.send("Hello from user service!");
    }

    function findUserById(req, res){
        var userId = req.params["userId"];
        var usr = null;
        userModel.findUserById(userId).exec(
            function (err, user) {
                if (err) {
                    return usr;
                }
                return res.json(user);
            }
        )
    }

    function findUserByCredentials(req, res){
        var username = req.query["username"];
        var password = req.query["password"];
        userModel.findByCredential(username, password).exec(
            function (err, user) {
                if (err) {
                    return res.sendStatus(400).send(err);
                }
                return res.json(user);
            }
        )
    }

    function updateUserById(req, res){
        var userId = req.params['userId'];
        var user = req.body;
        userModel
            .updateUser(userId,user)
            .then(
                function (user) {
                    res.json(user);
                },
                function (err) {
                    res.statusCode(400).send(err);
                }
            );
    }


    function findUserByUsername(req, res) {
        var username = req.query['username'];
        if (username){
            userModel.findUserByUserName(username).exec(
                function (err, user) {
                    if (err) {
                        return res.sendStatus(400).send(err);
                    }
                    return res.json(user);
                }
            )
        }
    }

    function deleteUser(req, res) {
        var userId = req.params['userId'];
        userModel.deleteUser(userId).exec(
            function (err, user) {
                if (err) {
                    return res.sendStatus(400).send(err);
                }
                return res.json(user);
            }
        );
    }
}
