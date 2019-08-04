import React from 'react';
import './SearchBar.css';

function SearchBar() {
    return (
        <section>
            <form role="form">
                <input type="text" />
                <button type="submit">Books Search</button>
            </form>
        </section>
    );
}

export default SearchBar;
