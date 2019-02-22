'user strict';

var Request = require("request");
var qs = require("querystring");
    var http = require("https");



var ActivateTrial = function(ActivateTrial){
    this.ActivateTrial=ActivateTrial;
    
}




ActivateTrial.activate_trial_subscription = function allServices(activateSub,result) {
var json = JSON.parse(JSON.stringify(activateSub));
var cus = json.customer;
var plan = json.plan;

    console.log("create subscription bodyyyyyyyyyy 11111111111111 ::>> "+cus+"  >>> "+plan);
    var options = { method: 'POST',
    url: 'https://api.stripe.com/v1/subscriptions',
    headers: 
     { 
       'content-type': 'application/x-www-form-urlencoded',
       authorization: globalString },
    form: { customer: cus, plan: plan,trial_from_plan: "true" } };
  
  Request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log("Create Subscription Rsponse>>>>>"+body);

   
    
 
result (null,response);
  
});

}




module.exports = ActivateTrial;