import React from 'react';
import './Navigation.css';

export default function Navigation({ backButton, text }) {
    if (backButton)
        return (
            <nav>
                <a href="/" style={{ all: 'none' }}>
                    <i className="fas fa-arrow-left"></i>
                </a>
                <h1>{text}</h1>
                <a href="/newrecipe" style={{ all: 'none' }}>
                    <i className="fas fa-plus"></i>
                </a>
            </nav>
        );

    return (
        <nav>
            <h1>Recepty</h1>
            <a href="/newrecipe" style={{ all: 'none' }}>
                <i className="fas fa-plus"></i>
            </a>
        </nav>
    );
}
