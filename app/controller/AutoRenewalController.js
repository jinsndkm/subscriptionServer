'use strict';

var Autorenewal = require('../model/AutoRenewalModel.js');

exports.my_subscriptions_autorenewal = function (req, res) {
    console.log('postAutoRenewal controller')

    var subscriptionId = parseInt(req.params.subscriptionId);

    console.log(subscriptionId);

    Autorenewal.getSubscriptionDetails(subscriptionId, function (err, services) {
        if (err)
            res.send(err);
        //console.log('res', services);
        res.send(services);
    });
}