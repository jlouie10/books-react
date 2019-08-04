import React, { Component } from 'react';
import './Book.css';

class Book extends Component {
    handleClick = () => {
        this.props.buttonClick(this.props.bookId, this.props.order);
    }

    render() {
        return (
            <div>
                <h3><a href={this.props.link}>{this.props.title}</a></h3>
                <h6>{this.props.authors}</h6>
                <img className="book-image" src={this.props.image} alt={this.props.title} />
                <p>{this.props.description}</p>
                <button type="button" onClick={this.handleClick}>{this.props.button}</button>
            </div>
        );
    }
}

export default Book;
