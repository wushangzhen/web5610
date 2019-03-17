module.exports= function(app){
    widgets = [
        { _id: "123", widgetType: "HEADER", name: ' ', pageId: "321", size: "1", text: "London terror attack: Police " +
                "fired unprecedented number of rounds", url: "", width: "", height: 100, rows: 0, class: '', icon: '',
            deletable: false, formatted: false, placeholder: ''},
        { _id: "124", widgetType: "HEADER", name: ' ', pageId: "321", size: "3", text: "Counter terrorism officers " +
                "patrol near the scene of the attack on London Bridge.", url: "", width: "", height: 100, rows: 0,
            class: '', icon: '', deletable: false, formatted: false, placeholder: '' },
        { _id: "125", widgetType: "IMAGE", pageId: "321", size: "", text: "", width: "100%",
            url: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/170604130220-41-london-bridge-incident-0604-gallery-exlarge-169.jpg',
            width: "", height: 100, rows: 0, class: '', icon: '',
            deletable: false, formatted: false, placeholder: '' },
        { _id: "456", widgetType: "HTML", name: 'html name', pageId: "321", size: "", text: "<p>Lorem ipsum</p>",
            url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false,
            formatted: false, placeholder: ''},
        { _id: "678", widgetType: "YOUTUBE", name: ' ', pageId: "321", size: "", text: "",
            url: 'https://www.youtube.com/embed/APexI9Zb6iE/', width: "100%", height: 100, rows: 0, class: '', icon: '',
            deletable: false, formatted: false, placeholder: '' },
        { _id: "789", widgetType: "HTML", name: 'html name', pageId: "323", size: "<p>Lorem ipsum</p>", text: "",
            url: "", width: "", height: 100, rows: 0, class: '', icon: '', deletable: false, formatted: false,
            placeholder: '' }
    ];

    //var widgetModel = models.widgetModel;

    var multer = require('multer'); // npm install multer --save
    var upload = multer({ dest: __dirname+'/../../dist/my-project/assets/uploads' });

    /* John pappy's - declare APIs at top and write functions below */

    app.post("/api/page/:pageId/widget", createWidget);
    app.get("/api/page/:pageId/widget",findAllWidgetsForPage);
    app.get("/api/widget/:widgetId",findWidgetById);
    app.put("/api/widget/:widgetId",updateWidget);
    app.delete("/api/widget/:widgetId",deleteWidget);

    app.put("/api/page/:pageId/widget",reorderWidgets);

    //UPLOAD
    app.post("/api/upload", upload.single('myFile'), uploadImage);

    /* pattern matching usies only base URL. it ignores anything after ?
     app.get("/api/user/:userId", findUserById);
     app.get("/api/user/:userId", findUserById);
     are the same URLs to Express!     */
    function uploadImage(req, res) {
        var userId = req.body.userId;
        var websiteId = req.body.websiteId;
        var pageId = req.body.pageId;
        var widgetId = req.body.widgetId;
        var width = req.body.width;
        var myFile = req.file;

        if(myFile == null) {
            //res.redirect("https://yourheroku.herokuapp.com/user/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
            // res.redirect("http://localhost:3200/user/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
            return;
        }


        var originalname = myFile.originalname; // file name on user's computer
        var filename = myFile.filename;     // new file name in upload folder
        var path  = myFile.path;         // full path of uploaded file
        var destination = myFile.destination;  // folder where file is saved to
        var size = myFile.size;
        var mimetype = myFile.mimetype;

        var url = 'assets/uploads/' + filename;
        console.log(url);

        // var widget = findWidgetById(widgetId);

        // var widget = { url: "assets/uploads/"+filename};
        //
        // var widget;
        for (var i = 0; i < widgets.length; i++) {
            if (widgets[i]._id === widgetId) {
                widgets[i].url = url;
                console.log(widgets[i].url);
            }
        }
        // widget.url = 'uploads/' + filename;
        //
        // /*widgetModel
        //   .updateWidget(widgetId, widget)
        //   .then(function (stats) {
        //       console.log(stats);
        //       res.send(200);
        //     },
        //     function (err) {
        //       res.sendStatus(404).send(err);
        //     });*/
        //
        // res.redirect("https://yourheroku.herokuapp.com/user/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
        // //res.redirect("http://localhost:3200/user/website/"+websiteId+"/page/"+pageId+"/widget/"+widgetId);
    }

    function array_swap(arr, old_index, new_index) {
        while (old_index < 0) {
            old_index += arr.length;
        }
        while (new_index < 0) {
            new_index += arr.length;
        }
        if (new_index >= arr.length) {
            var k = new_index - arr.length + 1;
            while (k--) {
                arr.push(undefined);
            }
        }
        arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
    };

    function reorderWidgets(req,res) {
        var startIndex = parseInt(req.query["start"]);
        var endIndex = parseInt(req.query["end"]);

        array_swap(widgets, startIndex, endIndex);
        // res.sendStatus(200);
    }


    function createWidget(req,res) {
        var pageId = req.params.pageId;
        var widget = req.body;
        for (var i = 0; i < widgets.length; i++) {
            if (widgets[i].pageId === pageId && widgets[i].name === widget.name
                && widgets[i].widgetType === widget.widgetType && widgets[i]._id === widget._id) {
                res.status(404).send("This page has already existed.");
                return;
            }
        }
        widget._id = Math.random().toString();
        widgets.push(widget);
        res.json(widget);
        //res.json(findAllWidgetsForPage2(pageId));
    }

    function findAllWidgetsForPage2(pageId) {
        widgetSet = [];
        for (var i = 0; i < widgets.length; i++) {
            if (widgets[i].pageId === pageId) {
                widgetSet.push(widgets[i]);
            }
        }
        return widgetSet;
    }


    function findAllWidgetsForPage(req,res) {
        var pageId = req.params.pageId;
        var resultSet = [];
        for(var i = 0; i < widgets.length; i++){
            if(widgets[i].pageId === pageId){
                resultSet.push(widgets[i]);
            }
        }
        res.json(resultSet);
        return;
    }

    function findWidgetById(req,res) {
        var widgetId  = req.params.widgetId;
        for (var i = 0; i < widgets.length; i++) {
            if (widgets[i]._id === widgetId) {
                res.json(widgets[i]);
                return;
            }
        }
    }

    // function findWidgetById(widgetId) {
    //     for (var i = 0; i < widgets.length; i++) {
    //         if (widgets[i]._id === widgetId) {
    //             return widgets[i];
    //         }
    //     }
    // }

    function updateWidget(req,res) {
        var widgetId  = req.params.widgetId;
        var widget = req.body;
        for (const i in this.widgets) {
            if (this.widgets[i]._id === widgetId) {
                switch (widget.widgetType) {
                    case 'HEADER':
                        this.widgets[i].text = widget.text;
                        this.widgets[i].size = widget.size;
                        return;
                    case 'IMAGE':
                        this.widgets[i].text = widget.text;
                        this.widgets[i].url = widget.url;
                        this.widgets[i].width = widget.width;
                        return;
                    case 'YOUTUBE':
                        this.widgets[i].text = widget.text;
                        this.widgets[i].url = widget.url;
                        this.widgets[i].width = widget.width;
                        return;
                }
            }
        }
    }

    function deleteWidget(req,res) {
        var widgetId  = req.params.widgetId;
        for(var i = 0; i < this.widgets.length; i++) {
            if (this.widgets[i]._id === widgetId) {
                var pageId = this.widgets[i].pageId;
                this.widgets.splice(i, 1);
                console.log(widgetId);
                res.json(findAllWidgetsForPage2(pageId));
                return;
            }
        }
    }
};
