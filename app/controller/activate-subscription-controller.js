'use strict';


var activateSubscription = require('../model/activate-subscription-model.js')



exports.activate_subscription = function (req, res) {
    console.log("BODY>>>"+JSON.stringify(req.body));
    
    activateSubscription.activate_subscriptions(req.body,function (err, createSub) {
    console.log('subscription controller')
    if (err)
        res.send(err);
    res.send(createSub);
});
}


