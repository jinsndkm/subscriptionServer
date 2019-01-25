'use strict';


var activateSubscription = require('../model/activate-subscription-model.js')



exports.activate_subscription = function (req, res) {
    
    console.log("inside activation");

    activateSubscription.activate_subscriptions(req.body,function (err, createSub) {
    if (err)
        res.send(err);
    res.send(createSub);
});
}


