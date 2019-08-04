import axios from 'axios';

export default {
    // Search for books
    search: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&projection=lite&maxResults=10`);
    },
    // List all books in database
    getBooks: function (book) {
        return axios.get('/api/v1/books');
    },
    // Save book to database
    saveBook: function (book) {
        return axios.post('/api/v1/books', book);
    },
    // Delete book from database
    deleteBook: function (_id) {
        return axios.delete(`/api/v1/books/${_id}`);
    }
};
