'user strict';

var Request = require("request");

var PlanProductList = function(planProductList){
    this.productName = planProductList.productName;
    // this.name = services.name;
   this.productId = planProductList.productId;
   this.orderToCashCycles=planProductList.orderToCashCycles;
   this.status=planProductList.status;
   this.productCode=planProductList.productCode;
   this.productType=planProductList.productType;
   this.isIncludedByDefault=planProductList.isIncludedByDefault;
   this.test=planProductList.orderToCashCycles.quantityRanges;
}

PlanProductList.getPlanProducts = function allServices(subId,result) {
    console.log('55555555555555555555.................................');

    Request.get({
        "headers": {

            "Authorization": globalString,

            "Content-Type": "application/json"
        },
        "url": "https://api.stripe.com/v1/plans?product="+subId
    }, (error, response, body) => {
        if (error) {
            return console.dir(error);
        }
      // return console.dir(JSON.parse(response));
      console.log('calling product api.................................');
       console.dir(JSON.parse(body));

       result(null, body);
        
    });


  
}
module.exports = PlanProductList;