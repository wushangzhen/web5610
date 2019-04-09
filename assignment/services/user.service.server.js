module.exports=function (app) {
    var userModel = require('../model/user/user.model.server');
    app.put("/api/user/:userId", updateUserById);
    app.get("/api/user/hello", helloUser);
    app.get("/api/user/:userId", findUserById);
    app.get("/api/user/", findUserByCredentials);
    app.post("/api/user/", createUser);
    app.get("/api/username", findUserByUsername);
    app.delete("/api/user/:userId", deleteUser);

    const passport = require('passport');
    var LocalStrategy = require('passport-local').Strategy;
    var FacebookStrategy = require('passport-facebook').Strategy;

    // passport.use("localStrategy", new LocalStrategy(localStrategy));
    var bcrypt = require("bcrypt-nodejs");
    const appId = 2394798677416584;
    const appSecret = "e681203fd40ad2d29a5de28b5fa841e9";

    var facebookConfig = {
        clientID : process.env.FACEBOOK_CLIENT_ID,
        clientSecret : process.env.FACEBOOK_CLIENT_SECRET,
        callbackURL : process.env.FACEBOOK_CALLBACK_URL
    };

    app.post("/api/login", passport.authenticate('local'), login);
    app.post("/api/logout", logout);
    app.post("/api/register", register);
    app.post("/api/loggedin", loggedin);


    app.get('/auth/facebook/callback',
        passport.authenticate('facebook',
            { successRedirect: '/#/profile', failureRedirect: '/#/login' }));
    app.get ('/facebook/login', passport.authenticate('facebook', { scope : 'email' }));



    passport.serializeUser(serializeUser);
    passport.deserializeUser(deserializeUser);
    passport.use('local', new LocalStrategy(localStrategy));
    passport.use('facebook', new FacebookStrategy(facebookConfig, facebookStrategy));


    function facebookStrategy(token, refreshToken, profile, done) {
        userModel
            .findFacebookUser(profile.id)
            .then(
                function (user) {
                    if (user) {
                        return done(null, user);
                    } else {
                        var names = profile.displayName.split(" ");
                        var newFacebookUser = {
                            username: 'Rename your username',
                            lastName: names[1],
                            firstName: names[0],
                            email: profile.emails ? profile.emails[0].value : "",
                            facebook: {
                                id: profile.id,
                                token: token
                            }
                        };
                        return userModel.createUser(newFacebookUser);
                    }
                },
                function (err) {
                    if (err) {
                        return done(err);
                    }
                }
            )
            .then(
                function (user) {
                    return done(null, user);
                },
                function (err) {
                    if (err) {
                        return done(err);
                    }
                }
            );
    }

    function loggedin(req, res) {
        res.send(req.isAuthenticated() ? req.user : '0');
    }

    function register(req, res) {
        var user = req.body;
        user.password = bcrypt.hashSync(user.password);
        userModel
            .findUserByUserName(user.username)
            .then(function (data) {
                if (data) {
                    res.status(400).send('Username is in use!');
                    return;
                } else {
                    userModel
                        .createUser(user)
                        .then(
                            function (user) {
                                if (user) {
                                    req.login(user, function (err) {
                                        if (err) {
                                            res.status(400).send(err);
                                        } else {
                                            res.json(user);
                                        }
                                    });
                                }
                            }
                        );
                }
            })
        // userModel.createUser(user).then(
        //     function(user) {
        //         if (user) {
        //             req.login(user, function (err) {
        //                 if (err) {
        //                     res.status(400).send(err);
        //                 } else {
        //                     res.json(user);
        //                 }
        //             })
        //         }
        //     }
        // )
    }

    function logout(req, res) {
        req.logOut();
        res.json(req.body);
    }


    function login(req, res) {
        var user = req.body;
        res.json(user);
    }

    function localStrategy(username, password, done) {
        // userModel.findByCredential(username, password).then(
        //     function (user) {
        //         if (user.username === username && user.password === password) {
        //             return done(null, user);
        //         } else {
        //             return done(null, false);
        //         }
        //     },
        //     function (err) {
        //         if (err) {
        //             return done(err);
        //         }
        //     }
        // )
        userModel
            .findUserByUserName(username)
            .then(
                function (user) {
                    if (user && bcrypt.compareSync(password, user.password)) {
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                },
                function (err) {
                    if (err) {
                        done(err);
                    }
                });
    }

    function deserializeUser(user, done) {
        userModel.findUserById(user._id)
            .then(
                function (user) {
                    done(null, user);
                },
                function (err) {
                    done(err, null);
                }
            )
    }

    function serializeUser(user, done) {
        done(null, user);
    }

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
