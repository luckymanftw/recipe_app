import React from 'react';
import './Img.css';
import classNames from 'classnames/bind';

export default function Img({ id, index, specialClassName }) {
    return (
        <img
            key={id + '_img'}
            src={'https://source.unsplash.com/collection/190727/' + index}
            alt="meal icon"
            className={classNames('meal-img', specialClassName)}
        ></img>
    );
}
