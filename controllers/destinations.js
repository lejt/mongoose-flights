const Flight = require("../models/flight");

module.exports = {
    create,
    ascend,
};

function create(req, res) {
    // find which departure info id it is from

    // console.log(req.params.id);

    Flight.findById(req.params.id, function(err, flight) {

        flight.destinations.push(req.body);
        // do i need to process the info before db insertion?
        
        // save then redirect
        flight.save(function(err) {
            if (err) console.log(err);
    
            console.log(flight);

            res.redirect(`/flights/${req.params.id}`);
        });
    });
}

function ascend(req,res) {
    Flight.findById(req.params.id, (err, flight) => {
        const results = flight.destinations.sort((a,b)=> a.arrival-b.arrival)
        res.render("flights/show", {flight})
    })
};
