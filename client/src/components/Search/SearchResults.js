import React from 'react';
import { Book } from '../common';
import './SearchResults.css';

function SearchResults(props) {
    return (
        <section>
            {
                props.books.map((book, index, books) =>
                    <Book
                        key={book.volumeId}
                        bookId={book.volumeId}
                        authors={book.authors}
                        button={props.button}
                        buttonClick={props.buttonClick}
                        description={book.description}
                        image={book.image}
                        order={index}
                        link={book.link}
                        title={book.title}
                    />
                )
            }
        </section>
    );
}

export default SearchResults;
