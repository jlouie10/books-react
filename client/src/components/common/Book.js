import React from 'react';
import './Book.css';

function Book(props) {
    return (
        <div>
            <h3><a href={props.link}>{props.title}</a></h3>
            <h6>{props.authors}</h6>
            <img className="book-image" src={props.image} alt={props.title} />
            <p>{props.description}</p>
            <button type="button" value={props.bookId} onClick={props.buttonClick}>{props.button}</button>
        </div>
    );
}

export default Book;
