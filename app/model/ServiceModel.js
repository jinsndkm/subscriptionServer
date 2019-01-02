'user strict';
var sql = require('../db/db.js');
var Request = require("request");

//Task object constructor
var Services = function(services){
    this.code = services.code;
    this.name = services.name;
    this.description = services.description;
}


Services.getService = function allServices(result) {
    Request.get({
        "headers": {
            "Authorization": "Basic MDpEZk9jcExWQVFFczk1U1hPSWhER0J0RzFXOFJCaGs3UVFsU2xOQ0JJRUJ4Y1NSSG9JQXAzbTJVdGFWNVRZUlVN",
            "Content-Type": "application/json"
        },
        "url": "https://secure.fusebill.com/v1/Products?includePricing=true&includeGlCode=true"
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
      // return console.dir(JSON.parse(response));
       console.dir(JSON.parse(body));

       result(null, body);
        
    });

}

module.exports = Services;