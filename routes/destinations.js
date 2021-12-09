const express = require('express');
const router = express.Router();
const destinationsCtrl = require('../controllers/destinations');

// Routes are not prefixed with anything

// POST "/flights/:id/destinations" page for selecting arrival info on show page
router.post('/flights/:id/destinations', destinationsCtrl.create);


module.exports = router;