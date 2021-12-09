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
    req.body.airline = req.body.airline[0].toUpperCase() + req.body.airline.slice(1).toLowerCase();
    req.body.airport = req.body.airport.toUpperCase();
    if (req.body.departs === '') delete req.body.departs; 
    //req.bodyflightNo

    // create in-memory Flight obj
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) {
            console.log(err);
            return res.redirect('/flights/new');
            // redirect to same page with additional error notes using <%= input must be ...%>
        }
        console.log(flight);
        res.redirect('/flights');
    });
}