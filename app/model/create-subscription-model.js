'user strict';

var Request = require("request");



var subscription = function(subscription){
    this.subscription=subscription;
}




subscription.create_subscriptions = function allServices(createSub,result) {
    console.log("SUBIDD::>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>"+JSON.stringify(createSub))
    Request.post({
        "headers": {
            "Authorization": "Basic MDpEZk9jcExWQVFFczk1U1hPSWhER0J0RzFXOFJCaGs3UVFsU2xOQ0JJRUJ4Y1NSSG9JQXAzbTJVdGFWNVRZUlVN",
            "Content-Type": "application/json"
        },
        "url":"https://secure.fusebill.com/v1/subscriptions",
        "body":JSON.stringify(createSub)
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





module.exports = subscription;