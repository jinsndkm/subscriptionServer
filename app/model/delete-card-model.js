'user strict';

var Request = require("request");
var qs = require("querystring");
    var http = require("https");



var DeleteCard = function(DeleteCard){
    this.DeleteCard=DeleteCard;
    
}




DeleteCard.delete_card = function allServices(cardID,result) {
    Request.delete({
        "headers": {

            "Authorization":globalString,

            "Content-Type": "application/json"
        },
        "url": "https://api.stripe.com/v1/customers/"+custId+"/sources/"+cardID
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
      // return console.dir(JSON.parse(response));
      
     console.log(body)
     
       result(null, body);
        
    });

}




module.exports = DeleteCard;