/// <reference path="~/GeneratedArtifacts/viewModel.js" />

myapp.ViewCustomer.Details_postRender = function (element, contentItem) {
    // Write code here.
    var name = contentItem.screen.Customer.details.getModel()[':@SummaryProperty'].property.name;
    contentItem.dataBind("screen.Customer." + name, function (value) {
        contentItem.screen.details.displayName = value;
    });
}

myapp.ViewCustomer.submit_execute = function (screen) {
    var prefVendor = new myapp.PreferredVendor();
    prefVendor.Customer = screen.Customer;
    prefVendor.Vendor = screen.Vendors.selectedItem;
    prefVendor.Rank = screen.RankProp;
    msls.application.applyChanges();

    // clear out the rank value so it's empty the next time the popup is opened
    screen.RankProp = null;
    screen.closePopup();
};
