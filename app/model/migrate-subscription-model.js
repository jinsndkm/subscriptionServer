'user strict';
var sql = require('../db/db.js');
var Request = require("request");

//Task object constructor
var migrateSubscription = function (subscriptions) {
    this.customerId = subscriptions.customerId;
    // this.name = services.name;
   this.planFamilyRelationshipId = subscriptions.planFamilyRelationshipId;
   this.migrationTimingOption = subscriptions.migrationTimingOption;
   this.subId=subscriptions.subId;
}

migrateSubscription.migrate_subscriptions= function migrateSubscription(migrateSub,result) {
    console.log("SUBIDD::>"+migrateSub.subId)
    Request.post({
        "headers": {
            "Authorization": "Basic MDpEZk9jcExWQVFFczk1U1hPSWhER0J0RzFXOFJCaGs3UVFsU2xOQ0JJRUJ4Y1NSSG9JQXAzbTJVdGFWNVRZUlVN",
            "Content-Type": "application/json"
        },
        "url":"https://secure.fusebill.com/v1/subscriptions/"+migrateSub.subId+"/migrate",
        "body":JSON.stringify(migrateSub)
    }, (error, response, body) => {
        if (error) {
            console.log("ERRRor"+error)
            return console.dir(error);
        }
        console.log(body)
        // return console.dir(JSON.parse(response));
        result(null, body);

    });

}



module.exports = migrateSubscription;