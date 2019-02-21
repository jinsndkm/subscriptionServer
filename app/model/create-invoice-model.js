'user strict';
// var sql = require('../db/db.js');
var Request = require("request");

var InvoiceDetails = function (invoiceDetails) {
    this.invoiceDetails = invoiceDetails;
    // this.name = services.name;

}

InvoiceDetails.getInvoiceDetails = function allServices(invoiceBody, result) {

    var json = JSON.parse(JSON.stringify(invoiceBody));
    var cus = json.customer;
    var amount = json.amount;


    var options = {
        method: 'POST',
        url: 'https://api.stripe.com/v1/invoiceitems',
        headers:
        {
            'content-type': 'application/x-www-form-urlencoded',
            authorization: globalString
        },
        form:
        {
            customer: cus,
            amount: amount,
            currency: 'usd',
            description: 'One-time setup fee'
        }
    };

    Request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log("Invoice created::>>"+body);
        result(null,body);
    });


}
module.exports = InvoiceDetails;