'user strict';
var sql = require('../db/db.js');
var Request = require("request");

//Task object constructor
var SubscriptionDetails = function (subscriptionDetails) {
    this.createdTimestamp = subscriptionDetails.createdTimestamp;
    this.planName = subscriptionDetails.planName;
    this.activatedTimestamp = subscriptionDetails.activatedTimestamp;
    this.planFrequency = subscriptionDetails.planFrequency;
    this.nextPeriodStartDate = subscriptionDetails.nextPeriodStartDate;
    this.openSubscriptionPeriodEndDate = subscriptionDetails.openSubscriptionPeriodEndDate;
}


SubscriptionDetails.getSubscriptionDetails= function allServices(id,result) {

    console.log("Getting details " + id);

    Request.get({
        "headers": {
            "Authorization": "Basic MDpEZk9jcExWQVFFczk1U1hPSWhER0J0RzFXOFJCaGs3UVFsU2xOQ0JJRUJ4Y1NSSG9JQXAzbTJVdGFWNVRZUlVN",
            "Content-Type": "application/json"
        },
        "url": "https://secure.fusebill.com/v1/subscriptions/"+id
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        // return console.dir(JSON.parse(response));
        console.dir(JSON.parse(body));
  
        result(null, body);

    });

}



module.exports = SubscriptionDetails;