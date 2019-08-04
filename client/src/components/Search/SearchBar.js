import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
    return (
        <section>
            <form role="form">
                <input type="text" value={props.query} onChange={props.inputChange} />
                <button type="submit" onClick={props.formSubmit}>Books Search</button>
            </form>
        </section>
    );
}

export default SearchBar;
