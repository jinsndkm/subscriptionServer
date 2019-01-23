'use strict';


var PlanDetails = require('../model/plan-details.js')



exports.get_plan_details = function (req, res) {

    var id = parseInt(req.params.subId);

    console.log('subscription controller ::>> '+id);

    PlanDetails.getPlanDetails(id,function (err, services) {

        
        if (err)
            res.send(err);
        //console.log('res', services);
        res.send(services);
    });
}


