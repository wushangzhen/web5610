var mongoose = require('mongoose');

var widgetSchema = require('./widget.schema.server');
var widgetModel = mongoose.model("Widgets", widgetSchema);

module.exports = widgetModel;
widgetModel.createWidget = createWidget;
widgetModel.findAllWidgetsForPage = findAllWidgetsForPage;
widgetModel.findWidgetById = findWidgetById;
widgetModel.updateWidget = updateWidget;
widgetModel.deleteWidget = deleteWidget;
widgetModel.updatePosition = updatePosition;
widgetModel.reorderWidget = reorderWidget;
var pageModel = require('../page/page.model.server');


function createWidget(pageId,widget) {

    return widgetModel.create(widget)
        .then(
            function (createdWidget) {
                pageModel.findPageById(pageId)
                    .then(
                        function (page) {

                            widget.position = page.widgets.length;
                            page.widgets.push(widget);
                            // console.log(page);
                            console.log(page);
                            pageModel.updatePage(pageId, page);
                            // widget.save();
                            // page.save();
                        }
                    );
                return createdWidget;
            }
        );
}

function findAllWidgetsForPage(pageId) {
    return widgetModel.find({pageId:pageId});
}

function findWidgetById(widgetId) {
    return widgetModel.findById(widgetId);
}

function updateWidget(widgetId, widget) {
    return widgetModel.findByIdAndUpdate(widgetId,widget).then(
        function () {
            return findWidgetById(widgetId);
        }
    );
}

function deleteWidget(widgetId) {
    return widgetModel.findByIdAndRemove(widgetId);
}

function updatePosition(pageId, position) {
    return widgetModel.find({pageId: pageId}, function (err, widgets) {
        widgets.forEach(function (widget) {
            if (widget.position > position) {
                widget.position--;
            }
        })
    })
}

function reorderWidget(pageId,start,end) {
    return findAllWidgetsForPage(pageId).then(
        function (pages) {
            array_swap(pages, start, end);
            pages.forEach(
                function (page) {
                    return pageModel.updatePage(page._id, page);
                }
            )
        }
    )
}

function array_swap(arr, old_index, new_index) {
    arr.splice(new_index, 0, arr.splice(old_index, 1));
    // while (old_index < 0) {
    //     old_index += arr.length;
    // }
    // while (new_index < 0) {
    //     new_index += arr.length;
    // }
    // if (new_index >= arr.length) {
    //     var k = new_index - arr.length + 1;
    //     while (k--) {
    //         arr.push(undefined);
    //     }
    // }
    // arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
};
