'use strict';


var ActivateTrial = require('../model/activate-trial-model.js')



exports.activate_trial_subscription = function (req, res) {
    console.log("inside create_subscription");
    var activateTrial=new ActivateTrial(req.body);
    ActivateTrial.activate_trial_subscription(req.body,function (err, activateTrial) {
    console.log('subscription controller')
    if (err)
        res.send(err);

       
    res.send(activateTrial);
});
}


