const Flight = require('../models/flight');
const Ticket = require("../models/ticket");

module.exports = {
    index,
    new: newOne,
    create,
    show,
};

function index(req, res) {
    // find all movies
    Flight.find({}, (err, flights)=> {
        if (err) {
            return res.redirect('/index');
        }
        const results = flights.sort((a,b)=> a.departs-b.departs)
        res.render('flights/index', {flights})
    })
};

function show(req, res) {
    // find the flight with :id
    // Flight.findById(req.params.id, function(err, flight) {
    //     res.render('flights/show', {flight});
    // })

    // finds the flight and shows its details based on clicked object id
    // reading tickets document and finding flight info from flight: {}
    Flight.findById(req.params.id, function(err, flight) {
        
        Ticket.find({flight: flight._id}, function(err, tickets) {
            // console.log(tickets);
            // console.log(flight);
            res.render('flights/show', {flight, tickets});
        });
    });
};


// function ascend(req,res) {
//     Flight.findById(req.params.id, (err, flight) => {
//         const results = flight.destinations.sort((a,b)=> a.arrival-b.arrival)
//         res.render("flights/show", {flight})
//     })
// };


function newOne(req, res) {
    res.render('flights/new');
};

function create(req, res) {
    //req.body. different parts 
    // req.body.airline = req.body.airline[0].toUpperCase() + req.body.airline.slice(1).toLowerCase();
    // req.body.airport = req.body.airport.toUpperCase();
    // if (req.body.departs === '') delete req.body.departs; 
    //req.bodyflightNo
    if (req.body.departs === '') {
        delete req.body.departs; 
    } else {
        const s = req.body.departs;
        req.body.departs = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;
    }

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