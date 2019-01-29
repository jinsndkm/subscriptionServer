'user strict';

var Request = require("request");



var PlanDetails = function(planDetails){
    this.planDetails=planDetails;
}




PlanDetails.getPlanDetails = function allServices(subId,result) {
    Request.get({
        "headers": {
            "Authorization": "Basic MDpRU2tCZlRkVGVVVGVYWTRyNllmZEhITlRKMEhmWHphdXZ5cEFmNFpYOEMwTnEwUm5sZHRlRXpWS2ttU3Z2dVdH",
            "Content-Type": "application/json"
        },
        "url": "https://secure.fusebill.com/v1/Plans/"+subId
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
      // return console.dir(JSON.parse(response));
      console.log('calling product api22222222222222.................................');
       console.dir(JSON.parse(body));

       result(null, body);
        
    });


  
}





module.exports = PlanDetails;