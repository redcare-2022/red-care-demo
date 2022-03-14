var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
var Request = require('./request');
console.log(Request)
// CREATES A NEW Request
router.post('/', function (req, res) {
    Request.create({
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
        },
        function (err, request) {
            if (err) return res.status(500).send("There was a problem adding the information to the database.");
            res.status(200).send(request);
        });
});

// RETURNS ALL THE request IN THE DATABASEf
router.get('/', function (req, res) {
    console.log("called");
    Request.find({}, function (err, request) {
        console.log("called");
        if (err) return res.status(500).send("There was a problem finding the request.");
        res.status(200).send(request);
    });
});

// GETS A SINGLE request FROM THE DATABASE
router.get('/:id', function (req, res) {
    Request.findById(req.params.id, function (err, request) {
        if (err) return res.status(500).send("There was a problem finding the request.");
        if (!request) return res.status(404).send("No request found.");
        res.status(200).send(request);
    });
});

// DELETES A request FROM THE DATABASE
router.delete('/:id', function (req, res) {
    Request.findByIdAndRemove(req.params.id, function (err, request) {
        if (err) return res.status(500).send("There was a problem deleting the request.");
        res.status(200).send("request: "+ request.name +" was deleted.");
    });
});

// UPDATES A SINGLE request IN THE DATABASE
router.put('/:id', function (req, res) {
    Request.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, request) {
        if (err) return res.status(500).send("There was a problem updating the request.");
        res.status(200).send(request);
    });
});


module.exports = router;