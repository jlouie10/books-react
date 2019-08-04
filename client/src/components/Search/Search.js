import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import API from '../../utils/API';
import './Search.css';

class Search extends Component {
    state = {
        books: [],
        button: 'Save',
        query: ''
    };

    // Search Google Books API for volumes matching the query
    searchBooks = query => {
        API.search(query)
            .then(res => {
                const books = [];

                res.data.items.forEach(book => {
                    const bookInfo = {
                        authors: book.volumeInfo.authors,
                        description: book.volumeInfo.description,
                        image: book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : 'https://via.placeholder.com/256x388.png?text=Image+not+available',
                        link: book.volumeInfo.infoLink,
                        title: book.volumeInfo.title,
                        volumeId: book.id
                    };
                    books.push(bookInfo);
                });

                this.setState({ books });
            })
            .catch(err => console.log(err));
    };

    // Update query parameter on input change
    handleInputChange = event => {
        this.setState({ query: event.target.value });
    };

    // Run searchBooks method and clear form on form submit
    handleFormSubmit = event => {
        event.preventDefault();

        this.searchBooks(this.state.query);
        this.setState({ query: '' });
    };

    // Save book on button click
    handleButtonClick = (volumeId, order) => {
        this.state.books.forEach(book => {
            if (book.volumeId === volumeId) {
                API.saveBook(book)
                    .then(res => { console.log(`"${res.data.title}" saved.`) })
                    .catch(err => console.log(err));
            }
        });
    };

    render() {
        return (
            <>
                <SearchBar
                    formSubmit={this.handleFormSubmit}
                    inputChange={this.handleInputChange}
                    query={this.state.query}
                />
                <SearchResults
                    books={this.state.books}
                    button={this.state.button}
                    buttonClick={this.handleButtonClick}
                />
            </>
        );
    }
}

export default Search;
