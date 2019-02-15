'use strict';

var Autorenewal = require('../model/AutoRenewalModel.js');

exports.my_subscriptions_autorenewal = function (req, res) {
    console.log("inside autorenewal"+JSON.stringify(req.body));
    var migrateSub=new Autorenewal(req.body);
    Autorenewal.getSubscriptionDetails(req.body, function (err, migrateSub) {
        if (err)
            res.send(err);
        //console.log('res', services);
        res.send(services);
    });
}


exports.my_subscriptions_autorenewal_disable = function (req, res) {
    console.log("DISAAAAAAA"+JSON.stringify(req.body))
    var migrateSub=new Autorenewal(req.body);
    Autorenewal.disableAutoRenewal(req.body,function (err, migrateSub) {
        console.log('subscription controller')
        if (err)
            res.send(err);
        res.send(migrateSub);
    });
}

