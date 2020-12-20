import React from 'react';
import './Time.css';

export default function Time({ duration }) {
    return (
        <div className="meal-duration">
            <i className="far fa-clock"></i>
            <p>{duration} min.</p>
        </div>
    );
}
