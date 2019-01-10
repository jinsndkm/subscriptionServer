'use strict';

var migrateSubscriptions = require('../model/migrate-subscription-model');
exports.migrate_subscriptions = function (req, res) {
    var migrateSub=new migrateSubscriptions(req.body);
        migrateSubscriptions.migrate_subscriptions(migrateSub,function (err, migrateSub) {
        console.log('subscription controller')
        if (err)
            res.send(err);
        res.send(migrateSub);
    });
}