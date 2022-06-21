import React from 'react';
import logo from './images/keep.png';

const Header = () => {
    return (
        <>
            <div className="header">
                <img src={logo} alt="" height="50" width="50" />
                <h1>Keep</h1>
            </div>
        </>
    )
}

export default Header;