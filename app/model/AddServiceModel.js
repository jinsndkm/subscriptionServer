'user strict';
// var sql = require('../db/db.js');
var Request = require("request");

var ServicesList = function(servicesList){
    this.servicelist = servicesList;
    // this.name = services.name;
   
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