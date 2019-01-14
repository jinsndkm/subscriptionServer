'user strict';
var sql = require('../db/db.js');
var Request = require("request");

//Task object constructor
var AutoRenewalDetail = function (autoRenewalDetail) {
    // this.createdTimestamp = autoRenewalDetail.createdTimestamp;
    // this.planName = autoRenewalDetail.planName;
    // this.activatedTimestamp = autoRenewalDetail.activatedTimestamp;
    // this.planFrequency = autoRenewalDetail.planFrequency;
    // this.nextPeriodStartDate = autoRenewalDetail.nextPeriodStartDate;
    // this.openSubscriptionPeriodEndDate = autoRenewalDetail.openSubscriptionPeriodEndDate;
}


AutoRenewalDetail.postAutoRenewal= function allServices(subscriptionId,result) {

    console.log("Getting details " + id);

    // Request.get({
    //     "headers": {
    //         "Authorization": "Basic MDpEZk9jcExWQVFFczk1U1hPSWhER0J0RzFXOFJCaGs3UVFsU2xOQ0JJRUJ4Y1NSSG9JQXAzbTJVdGFWNVRZUlVN",
    //         "Content-Type": "application/json"
    //     },
    //     "url": "https://secure.fusebill.com/v1/subscriptions/"+id
    // }, (error, response, body) => {
    //     if (error) {
    //         return console.dir(error);
    //     }
    //     // return console.dir(JSON.parse(response));
    //     console.dir(JSON.parse(body));
  
    //     result(null, body);

    // });

}



module.exports = AutoRenewalDetail;