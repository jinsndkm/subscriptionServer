'user strict';
var sql = require('../db/db.js');
var Request = require("request");
var stripe = require("stripe")("sk_live_WcIoDcfVidYWkaNoELBX2NIX");
//Task object constructor
var Services = function(services){
    this.code = services.code;
    this.name = services.name;
    this.description = services.description;
}


Services.getService = function allServices(result) {
    // Request.get({
    //     "headers": {
    //         "Authorization": " Bearer sk_live_WcIoDcfVidYWkaNoELBX2NIX",
    //         "Content-Type": "application/json"
    //     },
    //     "url": "https://api.stripe.com/v1/customers?limit=3"
    // }, (error, response, body) => {
    //     if (error) {
    //         return console.dir(error);
    //     }
    //   // return console.dir(JSON.parse(response));
    //    console.dir(JSON.parse(body));

    //    result(null, body);
        
    // });
    console.log("Worked!!!!")
 

    // stripe.products.create({
    //   name: 'T-shirt',
    //   type: 'good',
    //   description: 'Comfortable cotton t-shirt',
    //   attributes: ['size', 'gender']
    // }, function(err, product) {
    //     console.log(err)
    //   // asynchronously called
    // });


    stripe.invoiceItems.create({
      amount: 2500,
      currency: 'usd',
      customer: 'cus_EISwwYdJ3pguqw',
      description: 'Setup fee',
    },function(err,invoice){
        console.log(invoice)
    });
}

module.exports = Services;