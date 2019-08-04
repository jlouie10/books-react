import axios from 'axios';

export default {
    // Search for books
    search: function (query) {
        return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&projection=lite&maxResults=10`);
    },
    // Save book to database
    saveBook: function (book) {
        return axios.post('/api/v1/books', book);
    }
};
