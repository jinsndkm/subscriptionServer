'use strict';

var Services = require('../model/ServiceModel.js');

exports.get_all_services = function (req, res) {
    Services.getService(function (err, services) {

        console.log('service controller')
        if (err)
            res.send(err);
        console.log('res', services);
        res.send(services);
    });
}