/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewProduct.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Product.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Product." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

