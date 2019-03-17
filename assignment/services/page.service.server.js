module.exports=function (app) {
    app.post("/api/website/:websiteId/page", createPage);
    app.get("/api/website/:websiteId/page", findAllPagesForWebsite);
    app.get("/api/page/:pageId", findPageById);
    app.put("/api/page/:pageId", updatePage);
    app.delete("/api/page/:pageId", deletePage);

    pages = [
        {_id: "321", name: "page321", websiteId: "321", title: 'page321'},
        {_id: "323", name: "page323", websiteId: "321", title: 'page323'},
        {_id: "432", name: "page432", websiteId: "234", title: 'page432'},
        {_id: "234", name: "page234", websiteId: "345", title: 'page234'},
        {_id: "333", name: "page333", websiteId: "124", title: 'page333'},
        ];
    function createPage(req, res) {
        var websiteId = req.params.websiteId;
        var page = req.body;
        for (var i = 0; i < pages.length; i++) {
            if (pages[i].websiteId === page.websiteId && pages[i].name === page.name) {
                res.status(404).send("This page has already existed.");
                return;
            }
        }
        page._id = Math.random().toString();
        page.websiteId = websiteId;
        pages.push(page);
        res.json(findAllPagesForWebsite2(websiteId));
    }

    function findAllPagesForWebsite2(websiteId) {
        var resultSet = [];
        for (var x = 0; x < pages.length; x++) {
            if (pages[x].websiteId === websiteId) {
                resultSet.push(pages[x]);
            }
        }
        return resultSet;
    }

    function findAllPagesForWebsite(req, res) {
        var websiteId = req.params.websiteId;
        var resultSet = [];
        for (var x = 0; x < pages.length; x++) {
            if (pages[x].websiteId === websiteId) {
                resultSet.push(pages[x]);
            }
        }
        res.json(resultSet);
    }

    function findPageById(req, res) {
        var pageId = req.params.pageId;
        for (var i = 0; i < pages.length; i++) {
            if (pages[i]._id === pageId) {
                return res.json(pages[i]);
            }
        }
        res.status(404).send("Cannot find page.");
    }

    function updatePage(req, res) {
        let pageId = req.params.pageId;
        var updatedPage = req.body;
        console.log(pageId);
        for (var i = 0; i < pages.length; i++) {
            console.log(pages[i]._id);
            if (pages[i]._id === pageId) {
                pages[i].name = updatedPage.name;
                pages[i].title = updatedPage.title;
                res.json(pages[i]);
                console.log(pages[i].name);
                return;
            }
        }
        res.status(404).send("Cannot find page");
    }

    function deletePage(req, res) {
        var pageId = req.params.pageId;
        for (var x = 0; x < pages.length; x++) {
            if (pages[x]._id === pageId) {
                res.json(pages[x]);
                pages.splice(x, 1);
                return;
            }
        }
        res.status(404).send("Cannot find page");
    }
}

