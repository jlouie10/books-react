import React, { Component } from 'react';
import { Book } from '../common';
import API from '../../utils/API';
import './Bookshelf.css';

class Bookshelf extends Component {
    state = {
        books: [],
        button: 'Delete'
    };

    // After component is mounted, call list all books in database
    componentDidMount() {
        API.getBooks()
            .then(res => {
                this.setState({ books: res.data })
            })
            .catch(err => console.log(err))
    }

    // Delete book from database
    deleteBook = book => {
        API.deleteBook(book)
            .then(res => { console.log(`Book deleted.`) })
            .catch(err => console.log(err));
    };

    // Delete book on button click
    handleButtonClick = event => {
        this.deleteBook(event.target.value);
    };

    render() {
        return (
            <section>
                {
                    this.state.books.map(book =>
                        <Book
                            key={book.volumeId}
                            bookId={book._id}
                            authors={book.authors}
                            button={this.state.button}
                            buttonClick={this.handleButtonClick}
                            description={book.description}
                            image={book.image}
                            link={book.link}
                            title={book.title}
                        />
                    )
                }
            </section>
        );
    }
}

export default Bookshelf;
