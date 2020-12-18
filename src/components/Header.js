import React from 'react';
import ImageCard from './ImageCard';

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid">
            <ImageCard />,
            <h1 className="heading display-4">Professor Fury</h1>
        </div>
    )
}

export default Header;