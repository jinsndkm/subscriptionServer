'user strict';
var sql = require('../db/db.js');
var Request = require("request");

//Task object constructor
var Subscriptions = function (subscriptions) {
    this.planName = subscriptions.planName;
    this.status = subscriptions.status;
    this.planFrequency.planRevisionId = subscriptions.planFrequency.planRevisionId;
}


Subscriptions.getSubscriptions= function allServices(result) {
    Request.get({
        "headers": {
            "Authorization": "Basic MDpEZk9jcExWQVFFczk1U1hPSWhER0J0RzFXOFJCaGs3UVFsU2xOQ0JJRUJ4Y1NSSG9JQXAzbTJVdGFWNVRZUlVN",
            "Content-Type": "application/json"
        },
        "url": "https://secure.fusebill.com/v1/customers/4848884/subscriptions?query=status:Active"
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