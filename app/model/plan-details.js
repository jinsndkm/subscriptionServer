'user strict';

var Request = require("request");



var PlanDetails = function(planDetails){
    this.planDetails=planDetails;
}




PlanDetails.getPlanDetails = function allServices(subId,result) {
    Request.get({
        "headers": {

            "Authorization":globalString,

            "Content-Type": "application/json"
        },
        "url": "https://api.stripe.com/v1/products?active=true"
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
      // return console.dir(JSON.parse(response));
      console.log('calling product api22222222222222.................................');
       

       result(null, body);
        
    });


  
}





module.exports = PlanDetails;