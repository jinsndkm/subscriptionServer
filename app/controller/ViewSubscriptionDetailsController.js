'use strict';

var SubscriptionDetails = require('../model/ViewSubscriptionDetailsModel.js');

exports.get_subscription_details = function (req, res) {
    
    var id = parseInt(req.params.subId);

    console.log(id);

    SubscriptionDetails.getSubscriptionDetails(id,function (err, services) {

        
        if (err)
            res.send(err);
       // console.log('res', services);
        res.send(services);
    });
}