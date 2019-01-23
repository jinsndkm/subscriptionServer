'use strict';

var PlanProducts= require('../model/plan_product_model.js');

exports.get_product_list = function (req, res) {

    var id = parseInt(req.params.subId);

    console.log('subscription controller ::>> '+id);

    PlanProducts.getPlanProducts(id,function (err, services) {

        
        if (err)
            res.send(err);
        //console.log('res', services);
        res.send(services);
    });
}