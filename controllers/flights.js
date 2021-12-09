const Flight = require('../models/flight');

module.exports = {
    index,
    new: newOne,
    create,
};

function index(req, res) {
    // find all movies
    Flight.find({}, (err, flights)=> {
        if (err) {
            return res.redirect('/index');
        }
        res.render('flights/index', {flights})
    })
};

function newOne(req, res) {
    res.render('flights/new');
};

function create(req, res) {
    //req.body. different parts 
    //req.airline
    //req.airport
    //req.flightNo
    //req.departDate

    // create in-memory Flight obj
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) {
            console.log(err);
            return res.redirect('/flights/new');
        }
        console.log(flight);
        res.redirect('/flights');
    });
}