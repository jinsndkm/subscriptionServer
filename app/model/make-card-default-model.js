'user strict';

var Request = require("request");
var qs = require("querystring");
    var http = require("https");



var MakeCardDefault = function(subscription){
    this.subscription=subscription;
    
}




MakeCardDefault.make_card_default = function allServices(createSub,result) {
var json = JSON.parse(JSON.stringify(createSub));
var cus = json.customer;
var card = json.card;
    console.log("Make CArd Default ::>> "+cus+"  >>> "+card);
    var options = { method: 'POST',
    url: 'https://api.stripe.com/v1/customers/'+cus,
    headers: 
     { 
       'content-type': 'application/x-www-form-urlencoded',
       authorization: globalString },
    form: { default_source: card } };
  
  Request(options, function (error, response, body) {
    if (error) throw new Error(error);
  
    console.log("Create Subscription Rsponse>>>>>"+body);

   
    
 
result (null,response);
  
});

}




module.exports = MakeCardDefault;