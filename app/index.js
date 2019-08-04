'use strict';

// Dependencies
const router = require('express').Router(); // Create a Router instance

// Require versions
const v1 = require('./v1');

// Routes
router.use('/api/v1', v1);

module.exports = router;
