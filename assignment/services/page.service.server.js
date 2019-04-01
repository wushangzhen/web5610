module.exports=function (app) {
    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);

    var pageModel = require('../model/page/page.model.server');
    function createPage(req, res) {
        var websiteId = req.params.websiteId;
        var page = req.body;
        pageModel.createPage(websiteId,page)
            .then(
                function (page) {
                    res.json(page);
                }
                // function (error) {
                //     res.statusCode(400).send(error);
                // }
            );
    }

    function findAllPagesForWebsite(req, res) {
        var websiteId = req.params.websiteId;
        pageModel.findAllPagesForWebsite(websiteId).then(
            function (pages) {
                res.json(pages);
            },
            function (error) {
                res.statusCode(400).send(error);
            }
        );
    }

    function findPageById(req, res) {
        var pageId = req.params.pageId;
        pageModel.findPageById(pageId).then(
            function (page) {
                res.json(page);
            },
            function (error) {
                res.statusCode(400).send(error);
            }
        );
    }

    function updatePage(req, res) {
        let pageId = req.params.pageId;
        var updatedPage = req.body;
        pageModel.updatePage(pageId, updatedPage).then(
            function (page) {
                res.json(page);
            },
            function (err) {
                res.statusCode(400).send(err);
            }
        )
    }

    function deletePage(req, res) {
        var pageId = req.params.pageId;
        pageModel.deletePage(pageId).then(
            function (page) {
                res.json(page);
            },
            function (error) {
                res.statusCode(400).send(error);
            }
        );
    }
}

