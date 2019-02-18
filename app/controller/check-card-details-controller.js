'use strict';

var CheckCardDetails = require('../model/check-card-details-model');

exports.check_card_details = function (req, res) {
    
    var id = req.params.custId;

    console.log("CUSTID"+id);

    CheckCardDetails.checkCardDetails(id,function (err, services) {

        
        if (err)
            res.send(err);
       // console.log('res', services);
        res.send(services);
    });
}