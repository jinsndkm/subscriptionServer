'use strict';


var GetPlanDetails = require('../model/get-a-product-model')



exports.get_a_plan_detail = function (req, res) {

    var id = req.params.planFreID;

    console.log('plan id ::>> '+id);

    GetPlanDetails.get_a_plan_details(id,function (err, services) {

        
        if (err)
            res.send(err);
        //console.log('res', services);
        res.send(services);
    });
}


