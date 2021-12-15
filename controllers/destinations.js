const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
    create,
    ascend,
};

function create(req, res) {
    // find which flight the destination(arrival) is designated to
    Flight.findById(req.params.id, function(err, flight) {

        if (req.body.arrival === '') {
            delete req.body.arrival; 
        } else {
            const s = req.body.arrival;
            req.body.arrival = `${s.substr(5, 2)}-${s.substr(8, 2)}-${s.substr(0, 4)}`;
        };

        flight.destinations.push(req.body);

        // save then redirect
        flight.save(function(err) {
            if (err) console.log(err);
    
            console.log(flight);

            res.redirect(`/flights/${req.params.id}`);
        });
    });
};

// sorting function used to list flight dates by ascending order
function ascend(req,res) {
    Flight.findById(req.params.id, (err, flight) => {
        flight.destinations.sort((a,b)=> a.arrival-b.arrival)
        Ticket.find({flight: flight._id}, function(err, tickets) {
            res.render('flights/show', {flight, tickets});
        });
    })
};
