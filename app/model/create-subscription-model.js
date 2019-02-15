'user strict';

var Request = require("request");
var qs = require("querystring");
    var http = require("https");



var Subscription = function(subscription){
    this.subscription=subscription;
    
}




Subscription.create_subscriptions = function allServices(createSub,result) {
var json = JSON.parse(JSON.stringify(createSub));
var cus = json.customer;
var plan = json.plan;
    console.log("create subscription bodyyyyyyyyyy 11111111111111 ::>> "+cus+"  >>> "+plan);
    var options = { method: 'POST',
    url: 'https://api.stripe.com/v1/subscriptions',
    headers: 
     { 
       'content-type': 'application/x-www-form-urlencoded',
       authorization: 'Bearer sk_live_WcIoDcfVidYWkaNoELBX2NIX' },
    form: { customer: cus, plan: plan } };
  
  Request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log("Create Subscription Rsponse>>>>>"+response.statusMessage);

   
    
 
result (null,response);
  
});

}




module.exports = Subscription;