import React, { useState } from 'react';
import StarsRating from '../../molecules/starsRating/StarsRating';
import './RecipeBottomBar.css';

export default function RecipeBottomBar({ id }) {
    let scoreFromLS = localStorage.getItem(id);
    const [score, setScore] = useState(scoreFromLS || 1);

    const sendRating = async (event) => {
        if (localStorage.getItem(id)) {
            return;
        }
        if (event.target.classList.contains('fa-star')) {
            const newScore = Number(event.target.id);
            localStorage.setItem(id, newScore);
            setScore(newScore);
            const rawResponse = await fetch(
                `https://private-anon-a2aaa80eed-cookbook3.apiary-proxy.com/api/v1/recipes/${id}/ratings`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        score: newScore,
                    }),
                },
            );
            const content = await rawResponse.json();
            console.log(content);
        }
    };

    return (
        <div
            className="detail-bottom-bar"
            onClick={(event) => {
                sendRating(event);
            }}
        >
            <p>Ohodnoť tento recept</p>
            <StarsRating large={true} score={score} />
        </div>
    );
}
