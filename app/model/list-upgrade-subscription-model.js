'user strict';
var sql = require('../db/db.js');
var Request = require("request");

//Task object constructor
var listUpgradeSubscription = function (subscriptions) {
    this.name = subscriptions.name;
    this.description = subscriptions.description;
    this.plans=subscriptions.plans;
    this.code=subscriptions.coded;
    this.planFamilyRelationship=subscriptions.planFamilyRelationship;
    this.planFrequencies=subscriptions.planFrequencies;
}


listUpgradeSubscription.list_upgrade_subscriptions= function ListSubscriptions(subId,result) {
    Request.get({
        "headers": {
            "Authorization": "Basic MDpEZk9jcExWQVFFczk1U1hPSWhER0J0RzFXOFJCaGs3UVFsU2xOQ0JJRUJ4Y1NSSG9JQXAzbTJVdGFWNVRZUlVN",
            "Content-Type": "application/json"
        },
        "url": "https://secure.fusebill.com/v1/planFamilies/bySubscription/"+subId
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        // return console.dir(JSON.parse(response));
        // console.dir(JSON.parse(body));
        console.log(JSON.stringify("|||||||||"+body.planFamilyRelationship));
        result(null, body);

    });

}



module.exports = listUpgradeSubscription;