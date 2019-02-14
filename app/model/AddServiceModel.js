'user strict';
// var sql = require('../db/db.js');
var Request = require("request");

var ServicesList = function(servicesList){
    this.name = servicesList.name;
    // this.name = services.name;
   this.description = servicesList.description;
   this.planFrequencies=servicesList.planFrequencies;
   this.id=servicesList.id;
   this.code=servicesList.code;
   this.description = servicesList.description;
   this.longdescription = servicesList.longdescription;
   this.code = servicesList.code;
}

ServicesList.getServiceList = function allServices(result) {
    Request.get({
        "headers": {

            "Authorization": globalString,

            "Content-Type": "application/json"
        },
        "url": "https://api.stripe.com/v1/products?active=true"
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
      // return console.dir(JSON.parse(response));
       console.dir(JSON.parse(body));

       result(null, body);
        
    });


  
}
module.exports = ServicesList;