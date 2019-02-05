'user strict';

var Request = require("request");

var SingleSignOnKey = function(singleSignOnKey){
}

SingleSignOnKey.getSingleSignOnKey = function allServices(custId,result) {
    Request.get({
        "headers": {

            "Authorization": globalString,

            "Content-Type": "application/json"
        },
        "url": "https://secure.fusebill.com/v1/SingleSignOn/GetSingleSignOnToken/"+custId
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
      // return console.dir(JSON.parse(response));
       console.dir(JSON.parse(body));

       result(null, body);
        
    });


  
}
module.exports = SingleSignOnKey;