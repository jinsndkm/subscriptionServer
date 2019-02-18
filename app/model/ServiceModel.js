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

Services.cancelSubsription = function cancelSubsription(subId, result) {
    // const sub1={"subscriptionId":"1160897","cancellationOption":"None"};
    console.log("IDDD::>"+subId)
    Request.delete({
        "headers": {
            "Authorization": globalString,
            "Content-Type": "application/json"
        },
        "url": "https://api.stripe.com/v1/subscriptions/"+subId
    }, (error, response,body) => {
        if (error) {
            console.log("ERROR");
            return console.dir(error);
        }
      // return console.dir(JSON.parse(response));
      console.log('calling product api.................................');
    //    console.dir(JSON.parse(body));

       result(null, body);
        
    });
}


module.exports = Services;