'user strict';

var Request = require("request");



var ProductDetails = function(ProductDetails){
    this.ProductDetails=ProductDetails;
}




ProductDetails.getProductDetails = function allServices(subId,result) {
    Request.get({
        "headers": {

            "Authorization":globalString,

            "Content-Type": "application/json"
        },
        "url": "https://api.stripe.com/v1/products/"+subId
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
      // return console.dir(JSON.parse(response));
      console.log('calling product api22222222222222.................................');
       

       result(null, body);
        
    });


  
}





module.exports = ProductDetails;