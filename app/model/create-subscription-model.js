'user strict';

var Request = require("request");



var subscription = function(subscription){
    this.subscription=subscription;
}




subscription.create_subscriptions = function allServices(createSub,result) {
    Request.post({
        "headers": {
            "Authorization": globalString,
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





module.exports = subscription;