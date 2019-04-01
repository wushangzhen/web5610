var mongoose = require('mongoose');

var websiteSchema = require('./website.schema.server');
var websiteModel = mongoose.model("Website",websiteSchema);

var userModel = require('../user/user.model.server');

websiteModel.createWebsite = createWebsite;
websiteModel.findWebsiteById = findWebsiteById;
websiteModel.findAllWebsiteForUser = findAllWebsiteForUser;
websiteModel.updateWebsite = updateWebsite;
websiteModel.deleteWebsite = deleteWebsite;


module.exports = websiteModel;


function createWebsite(userId,website) {

    return websiteModel.create(website)
        .then(
            function (website) {
                userModel.findUserById(userId)
                    .then(
                        function (user) {
                            user.websites.push(website);
                            userModel.updateUser(userId,user);
                        }
                    );
                return website;
            }
        )
}

function findAllWebsiteForUser(developerId) {
    return websiteModel.find({developerId:developerId});
}

function findWebsiteById(id) {
    return websiteModel.findById(id);
}

function updateWebsite(websiteId,website) {
    return websiteModel.findByIdAndUpdate(websiteId,website).then(
        function(){
            return findWebsiteById(websiteId);
        }
    );
}

function deleteWebsite(id){
    return websiteModel.findByIdAndRemove(id);
}
