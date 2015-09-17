var express = require('express');           // allows me to use Express
var router = express.Router();              // Router - a function that comes from the Express library
var Vegetarian = require('../models/vegetarian.js');


// ** GET ALL vegetarians ** //
router.get('/vegetarians', function (req, res, next) {
    Vegetarian.findQ()
        .then(function(result){res.json(result)})
        .fail(function(err){res.send(err)})
        .done();
});


// ** GET SINGLE vegetarian ** //
router.get('/vegetarian/:id', function (req, res, next) {
    Vegetarian.findByIdQ(req.params.id)
        .then(function(result){res.json(result)})
        .fail(function(err){res.send(err)})
        .done();
});


// ** POST ALL vegetarians ** //
router.post('/vegetarians', function (req, res, next) {

  new Vegetarian ( {
        name: req.body.name,
        age: req.body.age,
        vegan: req.body.vegan
 })

    .saveQ()
        .then(function(result){res.json(result)})
        .fail(function(err){res.send(err)})
        .done();

});

// ** PUT (Update) SINGLE vegetarian ** //
router.put('/vegetarian/:id', function (req, res, next) {
    Vegetarian.findByIdAndUpdateQ(req.params.id, req.body)
        .then(function(result){res.json(result)})
        .fail(function(err){res.send(err)})
        .done();
});


// ** DELETE SINGLE vegetarian ** //
router.delete('/vegetarian/:id', function (req, res, next) {
    Vegetarian.findByIdAndRemoveQ(req.params.id)
        .then(function(result){res.json(result)})
        .fail(function(err){res.send(err)})
        .done();
});





module.exports = router;


