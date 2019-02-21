'user strict';
// var sql = require('../db/db.js');
var Request = require("request");

var PlanDetails = function(planDetails){
    this.planDetails = planDetails;
    // this.name = services.name;
   
}

PlanDetails.get_a_plan_details = function allServices(id,result) {
    Request.get({
        "headers": {

            "Authorization": globalString,

            "Content-Type": "application/json"
        },
        "url": "https://api.stripe.com/v1/products/"+id
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
      // return console.dir(JSON.parse(response));
       console.dir(JSON.parse(body));

       result(null, body);
        
    });


  
}
module.exports = PlanDetails;