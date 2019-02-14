'user strict';
// var sql = require('../db/db.js');
var Request = require("request");

//Task object constructor
var Subscriptions = function (subscriptions) {
    this.planName = subscriptions.planName;
    this.status = subscriptions.status;
    this.planFrequency.planRevisionId = subscriptions.planFrequency.planRevisionId;
    this.planCode = subscriptions.planCode;
}


Subscriptions.getSubscriptions= function allServices(result) {
    Request.get({
        "headers": {

            "Authorization": globalString,
            "Content-Type": "application/json"
        },
        "url": "https://api.stripe.com/v1/customers/"+custId+"/subscriptions"

    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        // return console.dir(JSON.parse(response));
        console.dir(JSON.parse(body));
  
        result(null, body);

    });

}
module.exports = Subscriptions;