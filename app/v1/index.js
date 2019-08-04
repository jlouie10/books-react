'use strict';

// Dependencies
const router = require('express').Router(); // Create a Router instance

// Require features
const books = require('./books');

// Routes
router.use('/books', books);

module.exports = router;
