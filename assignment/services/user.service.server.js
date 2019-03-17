module.exports=function (app) {
    app.put("/api/user/:userId", updateUserById);
    app.get("/api/user/hello", helloUser);
    app.get("/api/user/:userId", findUserById);
    app.get("/api/user/", findUserByCredentials);
    app.post("/api/user/", createUser);
    app.get("/api/user", findUserByUsername);
    app.delete("/api/user/:userId", deleteUser);

    var users = [
        {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonderland", email: ""},
        {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley" , email: ""},
        {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia", email: ""},
        {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi",  email: ""}
    ];

    function helloUser(req, res) {
        res.send("Hello from user service!");
    }

    function findUserById(req, res){
        var userId = req.params["userId"];
        var user = null;
        if (userId) {
            user = users.find(function (user) {
                return user._id === userId;
            });
            if (user) {
                res.json(user);
                return;
            }
        }
        res.status(404).send("This user is not exist.");
    }

    function findAllUsers(req, res){
        res.json(users);
    }

    function findUserByCredentials(req, res){
        var username = req.query["username"];
        var password = req.query["password"];
        // console.log(username);
        var user = null;
        if (username && password){
            user = users.find(function (user) {
                return user.username === username && user.password === password;
            });
        }
        res.json(user);
        //res.status(404).send("This user is not exist.");
    }

    function updateUserById(req, res){
        var userId = req.params['userId'];
        var user = req.body;

        console.log(req.body);
        console.log("update user: " + userId + " " + user.firstName + " " + user.lastName);

        for(var i = 0; i < users.length; i++) {
            if (users[i]._id === userId) {
                users[i].username = user.username;
                users[i].firstName = user.firstName;
                users[i].lastName = user.lastName;
                users[i].email = user.email;
                res.status(200).send(user);
                return;
            }
        }
        res.status(404).send("not found!");
    }

    function createUser(req, res) {
        var usr = req.body;
        for (var i = 0; i < users.length; i++) {
            if (users[i].username === usr["username"]) {
                res.status(404).send("This username is already exist.");
                return;
            }
        }
        // var temp = usr;
        usr._id = Math.random().toString(); // may not friendly
        // while (temp) { // avoid duplicates
        //     usr._id = Math.random().toString();
        //     temp = users.find(function (user) {
        //         return usr._id === user._id;
        //     });
        // }
        users.push(usr);
        res.json(usr);
    };


    function findUserByUsername(req, res) {
        var username = req.query['username'];
        var user = null;
        if (username){
            user = users.find(function (user) {
                return user.username === username;
            });
            if (user != null) {
                res.json(user);
                return;
            }
        }
        res.status(404).send("This user is not exist.");
    }

    function deleteUser(req, res) {
        var userId = req.params['userId'];
        for(var i = 0; i < users.length; i++) {
            if (users[i]._id === userId) {
                users.splice(i, 1);
                // var user = findUserById(userId);
                // res.json(user);
                return;
            }
        }
        res.status(404).send("This user is not exist.");
    }

}
