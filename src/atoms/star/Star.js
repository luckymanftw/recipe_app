import React from 'react';
import './Star.css';
import classNames from 'classnames/bind';

export default function Star({ id, selected, large = false }) {
    const classes = ['fa-star', id, { 'fa-2x': large }];
    const classesSelected = classNames('fas', classes);
    const classesUnselected = classNames('far', classes);
    if (selected) return <i className={classesSelected} id={id}></i>;
    return <i id={id} className={classesUnselected}></i>;
}
