'user strict';
var Request = require("request");

//Task object constructor
var CheckCardDetails = function (checkCardDetails) {

}


CheckCardDetails.checkCardDetails= function checkCardDetails(id,result) {

    console.log("Getting details " + id);

    Request.get({
        "headers": {
            "Authorization": globalString,
            "Content-Type": "application/json"
        },
        "url": "https://api.stripe.com/v1/customers/"+id+"/sources?object=card"
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
        // return console.dir(JSON.parse(response));
        console.dir(JSON.parse(body));
  
        result(null, body);

    });

}



module.exports = CheckCardDetails;