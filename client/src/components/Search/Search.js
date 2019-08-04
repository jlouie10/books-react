import React, { Component } from 'react';
import SearchBar from './SearchBar';
import SearchResults from './SearchResults';
import books from '../../books.json';
import './Search.css';

class Search extends Component {
    state = {
        books: books
    };

    render() {
        return (
            <>
                <SearchBar />
                <SearchResults books={this.state.books} />
            </>
        );
    }
}

export default Search;
