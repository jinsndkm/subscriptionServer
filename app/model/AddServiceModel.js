'user strict';
var sql = require('../db/db.js');
var Request = require("request");

var ServicesList = function(servicesList){
    this.name = servicesList.name;
    // this.name = services.name;
   this.description = servicesList.description;
   this.planFrequencies=servicesList.planFrequencies;
   this.id=servicesList.id;
   this.code=servicesList.code;
}

ServicesList.getServiceList = function allServices(result) {
    Request.get({
        "headers": {
            "Authorization": "Basic MDpEZk9jcExWQVFFczk1U1hPSWhER0J0RzFXOFJCaGs3UVFsU2xOQ0JJRUJ4Y1NSSG9JQXAzbTJVdGFWNVRZUlVN",
            "Content-Type": "application/json"
        },
        "url": "https://secure.fusebill.com/v1/Plans/?query=status:Active"
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