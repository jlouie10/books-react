'use strict';

// Dependencies
const mongoose = require('mongoose');

// Mongoose Schema constructor reference
const Schema = mongoose.Schema;

// Define Book schema
const bookSchema = new Schema({
    authors: [
        {
            required: true,
            type: String
        }
    ],
    description: {
        required: true,
        type: String
    },
    image: {
        required: true,
        type: String
    },
    link: {
        required: true,
        type: String
    },
    title: {
        required: true,
        type: String
    },
    volumeId: {
        required: true,
        type: String,
        unique: true
    }
}, { timestamps: true });

// Create Book model
const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
