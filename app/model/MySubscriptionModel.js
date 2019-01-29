'user strict';
var sql = require('../db/db.js');
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
            "Authorization": "Basic MDpRU2tCZlRkVGVVVGVYWTRyNllmZEhITlRKMEhmWHphdXZ5cEFmNFpYOEMwTnEwUm5sZHRlRXpWS2ttU3Z2dVdH",
            "Content-Type": "application/json"
        },
        "url": "https://secure.fusebill.com/v1/customers/4849387/subscriptions?query=status:Active"
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