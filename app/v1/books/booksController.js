'use strict';

// Dependencies
const router = require('express').Router(); // Create a Router instance

// Require Book model
const Book = require('./booksModel');

// Routes
// Matches with /api/v1/books
router.route('/')
    // GET route for listing all books sorted by id, with the most recent books appearing first
    .get(function (req, res) {
        Book.find(req.body)
            .sort({ _id: -1 })
            .then(function (books) {
                res.status(200).json(books);
            })
            .catch(function (err) {
                res.status(500).json(err);
            });
    })
    // POST route for creating a book
    .post(function (req, res) {
        Book.create(req.body)
            .then(function (book) {
                res.status(200).json(book);
            })
            .catch(function (err) {
                res.status(500).json(err);
            });
    });

// Matches with /api/v1/books/:_id
router.route('/:_id')
    // DELETE route for deleting a book by id
    .delete(function (req, res) {
        Book.deleteOne({ _id: req.params._id })
            .then(function (book) {
                res.status(200).json(book);
            })
            .catch(function (err) {
                res.status(500).json(err);
            });
    });

module.exports = router;
