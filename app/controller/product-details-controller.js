'use strict';


var ProductDetails = require('../model/product-details.js')



exports.get_product_details = function (req, res) {

    var id = req.params.subId;

    console.log('subscription controller11111111 ::>> '+id);

    ProductDetails.getProductDetails(id,function (err, services) {

        
        if (err)
            res.send(err);
        //console.log('res', services);
        res.send(services);
    });
}


