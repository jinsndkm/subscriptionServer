'use strict';

module.exports = function (app) {
    var service = require('../controller/ServiceController');
    var todoList = require('../controller/appController');
    var mySubscrriptios = require('../controller/MySubscriptionController');
    var serviceList = require('../controller/addServiceController');
    var productList = require('../controller/plan_products_list_controller');
    var plandetails = require('../controller/plan-details-controller')
    var subscription = require('../controller/create-subscription-controller')
    var activateSub = require('../controller/activate-subscription-controller')
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

        app.route('/servicelist')
        .get(serviceList.get_all_services);

        app.route('/planproducts/:subId')
        .get(productList.get_product_list);

        app.route('/plandetails/:subId')
        .get(plandetails.get_plan_details);

        app.route('/subscription/create')
        .post(subscription.create_subscription);

        app.route('/subscription/activate')
        .post(activateSub.activate_subscription);
}