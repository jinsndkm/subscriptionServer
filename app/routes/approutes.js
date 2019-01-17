'use strict';

module.exports = function (app) {
    var service = require('../controller/ServiceController');
    var todoList = require('../controller/appController');
    var mySubscrriptios = require('../controller/MySubscriptionController');
    var viewSubscriptionDetails = require('../controller/ViewSubscriptionDetailsController');
    var autoRenewal = require('../controller/AutoRenewalController');
    // todoList Routes
    app.route('/tasks')
        .get(todoList.list_all_tasks)
        .post(todoList.create_a_task);

    app.route('/tasks/:taskId')
        .get(todoList.read_a_task)
        .put(todoList.update_a_task)
        .delete(todoList.delete_a_task);

    app.route('/fusebill')
        .get(service.get_all_services);

    app.route('/subscription/cancel')
        .post(service.cancel_subscription);

    app.route('/mysubscriprions')
        .get(mySubscrriptios.get_my_subscriptions);

    app.route('/mysubscription/viewSubscription/:subId')
        .get(viewSubscriptionDetails.get_subscription_details);
    app.route('/mysubscription/autorenewal/:subscriptionId')
        .get(autoRenewal.my_subscriptions_autorenewal);
}