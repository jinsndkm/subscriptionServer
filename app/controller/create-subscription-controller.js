'use strict';


var subscription = require('../model/create-subscription-model.js')



exports.create_subscription = function (req, res) {
    console.log("inside create_subscription");
    var createSub=new subscription(req.body);
    subscription.create_subscriptions(req.body,function (err, createSub) {
    console.log('subscription controller')
    if (err)
        res.send(err);
    res.send(createSub);
});
}


