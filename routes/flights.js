var express = require('express');
var router = express.Router();
const flightsCtrl = require('../controllers/flights');

// GET "/" page for all flights 
router.get('/', flightsCtrl.index);

// GET "/new" page for adding flights
router.get('/new', flightsCtrl.new);

// POST "/" page redirect after data submit
router.post('/', flightsCtrl.create);

// GET "/show" page for flight details
router.get('/:id', flightsCtrl.show);


module.exports = router;
