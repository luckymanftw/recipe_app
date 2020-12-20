import React from 'react';
import Star from '../../atoms/star/Star';

export default function StarsRating({ score, large }) {
    return (
        <div>
            <Star id={1} large={large} selected={score >= 1} />
            <Star id={2} large={large} selected={score >= 2} />
            <Star id={3} large={large} selected={score >= 3} />
            <Star id={4} large={large} selected={score >= 4} />
            <Star id={5} large={large} selected={score >= 5} />
        </div>
    );
}
