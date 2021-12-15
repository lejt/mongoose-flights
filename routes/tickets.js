const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// nothing is prefixed here

// GET new tickets page
router.get('/flights/:id/tickets/new', ticketsCtrl.new);

// POST new tickets to show page
router.post('/flights/:id/tickets', ticketsCtrl.create);


module.exports = router;