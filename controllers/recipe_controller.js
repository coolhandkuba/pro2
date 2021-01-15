var express = require("express");

var router = express.Router();

var recipes = require("../models/restaurant.js");

router.get("/", function(request, result) {
    recipes.all(function(data) {
        var hbsObject = {
            recipes: data
        };
        console.log(hbsObject);
        result.render("index", hbsObject);
    });
});

router.post("/", function(request, result) {
    recipes.create([
        "recipe_name",
        "recipe"
    ], [
        request.body.recipe_name,
        request.body.recipe
    ], function() {
        // result.json({ id: result.insertID});
        result.redirect("/");
    });
});

router.put("/:id", function(request, result) {
    var condition = "id = " + request.params.id;
    console.log("condition", condition);
    recipe.update({
        devoured: request.body.devoured
    }, condition, function() {
    //     if (result.changedRows == 0) {
    //     return result.status(404).end();
    // } else {
    //     result.status(200).end()
    // }
        result.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;