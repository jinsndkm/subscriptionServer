'user strict';
// var sql = require('../db/db.js');
var Request = require("request");
var stripe = require("stripe")("sk_live_WcIoDcfVidYWkaNoELBX2NIX");
//Task object constructor
var Services = function (services) {
    this.subscriptionId = services.subscriptionId;
    // this.name = services.name;
    this.httpStatusCode = services.httpStatusCode;
    this.cancellationOption = services.cancellationOption;
}


Services.getService = function allServices(result) {
    console.log("Worked!!!!")
    stripe.invoiceItems.create({
        amount: 2500,
        currency: 'usd',
        customer: 'cus_EISwwYdJ3pguqw',
        description: 'Setup fee',
    }, function (err, invoice) {
        console.log(invoice)
    });
}

Services.cancelSubsription = function cancelSubsription(sub, result) {
    // const sub1={"subscriptionId":"1160897","cancellationOption":"None"};
    Request.post({
        "headers": {
            "Authorization": globalString,
            "Content-Type": "application/json"
        },
        "url": "https://secure.fusebill.com/v1/subscriptionCancellation",
        "body": JSON.stringify(sub)
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        console.dir("SUB::>" + JSON.stringify(sub))
        // return console.dir(JSON.parse(response));
        console.dir("BB" + JSON.stringify(body));
        console.dir(error)
        result(null, body);

    });

}

module.exports = Services;