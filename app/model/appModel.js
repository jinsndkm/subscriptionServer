'user strict';
// var sql = require('../db/db.js');
var Request = require("request");
//Task object constructor
var Task = function (task) {
    this.task = task.task;
    this.status = task.status;
    this.created_at = new Date();
};
Task.createTask = function createUser(newTask, result) {
    sql.query("INSERT INTO tasks set ?", newTask, function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {

            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};
Task.getTaskById = function createUser(taskId, result) {
    sql.query("Select task from tasks where id = ? ", taskId, function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);

        }
    });
};
Task.getAllTask = function getAllTask(result) {
    // sql.query("Select * from tasks", function (err, res) {

    //     if (err) {
    //         console.log("error: ", err);
    //         result(null, err);
    //     }
    //     else {
    //         console.log('tasks : ', res);

    //         result(null, res);
    //     }
    // });

//     console.log("Worked!!!!")
//     var stripe = require("stripe")("sk_live_WcIoDcfVidYWkaNoELBX2NIX");



// stripe.invoiceItems.create({
//   amount: 2500,
//   currency: 'usd',
//   customer: 'cus_EISwwYdJ3pguqw',
//   description: 'setup fee',
// });

    // Request.get({
    //     "headers": { "content-type": "application/json", "Authorization": " Bearer sk_live_WcIoDcfVidYWkaNoELBX2NIX" },
    //     "url": "https://api.stripe.com/v1/customers?limit=3",


    // }, (error, response, body) => {
    //     if (error) {
    //         result(null, error);
    //     } else {
    //         result(null, body);
    //     }
    //     // console.dir(JSON.parse(body));
    // });
};
Task.updateById = function (id, task, result) {
    sql.query("UPDATE tasks SET task = ? WHERE id = ?", [task.task, id], function (err, res) {
        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {
            result(null, res);
        }
    });
};
Task.remove = function (id, result) {
    sql.query("DELETE FROM tasks WHERE id = ?", [id], function (err, res) {

        if (err) {
            console.log("error: ", err);
            result(null, err);
        }
        else {

            result(null, res);
        }
    });
};

module.exports = Task;