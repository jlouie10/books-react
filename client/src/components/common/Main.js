import React from 'react';
import './Main.css';

function Main(props) {
    return (
        <main role="main">
            {props.children}
        </main>
    );
}

export default Main;
