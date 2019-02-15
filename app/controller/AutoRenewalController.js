'use strict';

var Autorenewal = require('../model/AutoRenewalModel.js');

exports.my_subscriptions_autorenewal = function (req, res) {
    console.log("inside autorenewal"+JSON.stringify(req.body));
    var autoRenewalBody=new Autorenewal(req.body)

    var subscriptionId = parseInt(req.params.subscriptionId);
    var status = req.params.status
    console.log(status);

    Autorenewal.getSubscriptionDetails(autoRenewalBody, function (err, autoRenewalBody) {
        if (err)
            res.send(err);
        //console.log('res', services);
        res.send(services);
    });
}

exports.my_subscriptions_autorenewal_disable = function (req, res) {
    var autoRenewalBody= new Autorenewal(req.body);
    Autorenewal.disableAutoRenewal(autoRenewalBody, function (err, autoRenewalBody) {
        if (err)
            res.send(err);
        //console.log('res', services);
        res.send(services);
    });
}

