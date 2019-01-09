'use strict';

var Subscriptions = require('../model/MySubscriptionModel.js');

exports.get_my_subscriptions = function (req, res) {
    Subscriptions.getSubscriptions(function (err, services) {

        console.log('subscription controller')
        if (err)
            res.send(err);
        //console.log('res', services);
        res.send(services);
    });
}