var mongoose = require('mongoose');
var userSchema = require('./user.schema.server');

var userModel = mongoose.model('User', userSchema);

userModel.createUser = createUser;
userModel.findUserById = findUserById;
userModel.findUserByUserName = findUserByUserName;
userModel.findByCredential = findByCredential;
userModel.updateUser = updateUser;
userModel.deleteUser = deleteUser;
userModel.findFacebookUser = findFacebookUser;

//helper function
userModel.populateUsers = populateUsers;

module.exports = userModel;

function findFacebookUser(id) {
    return userModel.findOne({"facebook.id": id});
}

function populateUsers(users) {
    return userModel.insertMany(users);
}

function createUser(user) {
    return userModel.create(user);
}

function findUserById(id) {
    return userModel.findById(id);
}

function findUserByUserName(userName) {
    return userModel.findOne({username:userName});
}

function findByCredential(userName,password){
    return userModel.findOne({username:userName,password:password});
}

function updateUser(userId,user) {
    return userModel.findByIdAndUpdate(userId,user).then(
        function(){
            return findUserById(userId);
        }
    );
}

function deleteUser(userId){
    return userModel.findByIdAndRemove(userId);
}


