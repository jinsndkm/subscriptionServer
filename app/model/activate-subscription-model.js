'user strict';

var Request = require("request");



var activatesubscription = function(subscription){
    this.subscription=subscription;
}




activatesubscription.activate_subscriptions = function allServices(createSub,result) {
    
    Request.post({
        "headers": {
            "Authorization": "Basic MDpEZk9jcExWQVFFczk1U1hPSWhER0J0RzFXOFJCaGs3UVFsU2xOQ0JJRUJ4Y1NSSG9JQXAzbTJVdGFWNVRZUlVN",
            "Content-Type": "application/json"
        },
        "url":"https://secure.fusebill.com/v1/subscriptionActivation/"+createSub.subscriptionId
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





module.exports = activatesubscription;