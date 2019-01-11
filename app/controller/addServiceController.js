'use strict';

var servicesList = require('../model/AddServiceModel.js');

exports.get_all_services = function(req, res){
    console.log("Get all services");
    servicesList.getServiceList(function(err,services){
        if(err)
        res.send(err);

        res.send(services);

    }
    );

}