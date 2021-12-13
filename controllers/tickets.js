const Flight = require("../models/flight");
const Ticket = require("../models/ticket");

module.exports = {
    new: newTicket,
    create,
}

function create(req, res) {
    // console.log(req.params.id);
    // console.log('seat: '+ req.body.seatAF + req.body.seatNum);
    // console.log('price: '+req.body.price)
    req.body.seat = req.body.seatAF + req.body.seatNum;
    // res.redirect('/flights/show');


    req.body.flight = req.params.id;
    Ticket.create(req.body, function(err) {
        res.redirect(`/flights/${req.params.id}`);
    });
    // const ticket = new Ticket(req.body);
    // ticket.save(function (err) {
    //     if (err) {
    //         console.log(err);
    //         return res.redirect(`/flights/${req.params.id}/tickets/new`);
    // }
    // console.log(ticket);
    //     // console.log(ticket.seat);
    //     // console.log(ticket.price);
    //     // console.log(ticket.flight);
        
    // res.redirect(`/flights/${req.params.id}`);
    // });
        
};

function newTicket(req, res) {
    // console.log(req.params.id)
    Flight.findById(req.params.id, function(err, flight) {
        // console.log(flight)
        res.render('tickets/new', {flight});
    })
};


