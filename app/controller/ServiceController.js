'use strict';

var Services = require('../model/ServiceModel.js');
const bodyParser = require('body-parser');
exports.get_all_services = function (req, res) {
    Services.getService(function (err, services) {

        console.log('service controller')
        if (err)
            res.send(err);
        console.log('res', services);
        res.send(services);
    });
}

exports.cancel_subscription = function (req, res) {
    console.log("sub IDDDDD::>"+req.params.subscriptionId)
    // var sub=new Services(req.body);
    Services.cancelSubsription(req.params.subscriptionId,function (err,services) {

        console.log('service controller')
        if (err)
            res.send(err);
        // console.log('res', sub);
        res.send(services);
    });
}

