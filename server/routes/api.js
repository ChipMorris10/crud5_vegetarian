var express = require('express');           // allows me to use Express
var router = express.Router();          // Router - a function that comes from the Express library
var Vegetarian = require('../models/vegetarian.js');


// ** GET ALL vegetarians ** //



// ** GET SINGLE vegetarian ** //


// ** POST ALL vegetarians ** //
router.post('/vegetarians', function (req, res, next) {

    var newVegetarian = new Vegetarian ( {
        name: req.body.name,
        age: req.body.age,
        vegan: req.body.vegan

        });

newVegetarian.saveQ()
    .then(function(result){res.json(result)})
    .fail(function(err){res.send(err)})
    .done()

});

// ** PUT (Update) SINGLE vegetarian ** //


// ** DELETE SINGLE vegetarian ** //



















module.exports = router;


