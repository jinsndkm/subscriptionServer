'user strict';

var Request = require("request");



var Subscription = function(subscription){
    this.subscription=subscription;
    this.id = subscription.id;
}




Subscription.create_subscriptions = function allServices(createSub,result) {
    Request.post({
        "headers": {
            "Authorization": "Basic MDpRU2tCZlRkVGVVVGVYWTRyNllmZEhITlRKMEhmWHphdXZ5cEFmNFpYOEMwTnEwUm5sZHRlRXpWS2ttU3Z2dVdH",
            "Content-Type": "application/json"
        },
        "url":"https://secure.fusebill.com/v1/subscriptions",
        "body":JSON.stringify(createSub)
    }, (error, response, body) => {
        if (error) {
            console.log("ERRRor"+error)
            return console.dir(error);
        }
        console.log("create subscription ::>> "+body);
        // return console.dir(JSON.parse(response));
        result(null, body);

    });


  
}





module.exports = Subscription;