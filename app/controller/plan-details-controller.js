'use strict';


var PlanDetails = require('../model/plan-details.js')



exports.get_plan_details = function (req, res) {

    var id = req.params.subId;

    console.log('subscription controller11111111 ::>> '+id);

    PlanDetails.getPlanDetails(id,function (err, services) {

        
        if (err)
            res.send(err);
        //console.log('res', services);
        res.send(services);
    });
}


