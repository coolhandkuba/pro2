var orm = require("../config/orm.js");

var recipes = {
    all: function(callback) {
        orm.all("recipes", function(result) {
            callback(result);
        });
    },
    create: function(cols, vals, callback) {
        orm.create("recipes", cols, vals, function(result) {
            callback(result);
        });
    },
    update: function(objColVals, condition, callback) {
        orm.update("recipes", objColVals, condition, function(result) {
            callback(result);
        });
    }
};

// Export the database functions for burgers_controller.js 
module.exports = recipes;