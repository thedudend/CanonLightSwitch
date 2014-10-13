/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewOrder.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Order.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Order." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

