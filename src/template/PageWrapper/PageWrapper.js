import React from 'react';
import './PageWrapper.css';
import Navigation from '../../organisms/Navigation/Navigation';

export default function PageWrapper({ backButton, text, children }) {
    return (
        <>
            <Navigation backButton={backButton} text={text}>
                This is top nav
            </Navigation>
            {children}
        </>
    );
}
