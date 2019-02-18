'user strict';
// var sql = require('../db/db.js');
var Request = require("request");

//Task object constructor
var SubscriptionDetails = function (subscriptionDetails) {
    this.subscriptionDetails = subscriptionDetails;
    
}


SubscriptionDetails.getSubscriptionDetails= function allServices(id,result) {

    console.log("Getting details " + id);

    Request.get({
        "headers": {

            "Authorization": globalString,

            "Content-Type": "application/json"
        },
        "url": "https://api.stripe.com/v1/subscriptions/"+id
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        // return console.dir(JSON.parse(response));
        // console.dir(JSON.parse(body));
  console.log(body)
        result(null, body);

    });

}



module.exports = SubscriptionDetails;