var mongoose = require('mongoose');
var websiteSchema = require('../website/website.schema.server');
var userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    // websites: [],
    websites: [websiteSchema],
    facebook: {
        id: String,
        token: String
    },
    dateCreated: {type:Date, default: Date.now()},
}, {collection: 'Users'});

var User = mongoose.model('User', userSchema);

module.exports = userSchema;
