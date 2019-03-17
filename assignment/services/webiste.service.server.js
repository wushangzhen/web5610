module.exports=function (app) {
    app.get("/api/user/:userId/website", findWebsiteForUser);
    app.post("/api/user/:userId/website", createWebsite);
    app.delete("/api/user/:userId/website/:websiteId", deleteWebsite);
    app.get("/api/user/:userId/website/:websiteId", findWebsiteById);
    app.put("/api/user/:userId/website/:websiteId", updateWebsiteById);

    websites = [
  {_id: "321", name: "Facebook", developerId: "123", description: 'Blogger Post'},
  {_id: "323", name: "Facebook2", developerId: "123", description: 'Blogger'},
  {_id: "432", name: "Twitter", developerId: "234", description: 'Blogger Post'},
  {_id: "234", name: "Amazon", developerId: "345", description: 'Blogger Post'},
  {_id: "333", name: "MyWebSite", developerId: "124", description: 'Blogger Post'}
];

    // var websites = require("./website.mock.server");

    // app.get("/api/user/:userId/website", findWebsiteForUser);
    // app.post("/api/user/:userId/website", createWebsite);
    // app.delete("/api/user/:userId/website/:websiteId", deleteWebsite);
    // app.get("/api/user/:userId/website/:websiteId", findWebsiteById);
    // app.put("/api/user/:userId/website/:websiteId", updateWebsiteById);

    function updateWebsiteById(req, res){
        var userId = req.params['userId'];
        var websiteId = req.params['websiteId'];
        var newWebSite = req.body;
        for(var i = 0; i < this.websites.length; i++) {
            if (this.websites[i]._id === websiteId) {
                this.websites[i] = newWebSite;
                break;
            }
        }
        res.json(getWebsitesForUserId(userId));
    }

    function findWebsiteById(req, res){
        var userId = req.params['userId'];
        var websiteId = req.params['websiteId'];
        res.json(getWebsiteById(websiteId));
    }

    function deleteWebsite(req, res){
        var userId = req.params['userId'];
        var websiteId = req.params['websiteId'];
        for(var i = 0; i < this.websites.length; i++) {
            if (this.websites[i]._id === websiteId) {
                this.websites.splice(i, 1);
                var websites = getWebsitesForUserId(userId);
                res.json(websites);
                return;
            }
        }

    }

    function createWebsite(req, res){
        var userId = req.params['userId'];
        var website = req.body;
        website._id = (new Date()).getTime() + "";
        website.developerId = userId;
        this.websites.push(website);
        var websites = getWebsitesForUserId(userId);
        res.json(websites);
    }

    function findWebsiteForUser(req, res) {
        var userId = req.params['userId'];
        var result = getWebsitesForUserId(userId);
        res.json(result);
    }

    function getWebsitesForUserId(userId) {
        var res=[];
        for(var i = 0; i < this.websites.length; i++) {
            if (this.websites[i].developerId === userId) {
                res.push(this.websites[i]);
            }
        }
        return res;
    }

    function getWebsiteById(websiteId){
        for(var i = 0; i < this.websites.length; i++) {
            if (this.websites[i]._id === websiteId) {
                return this.websites[i];
            }
        }
    }
}
