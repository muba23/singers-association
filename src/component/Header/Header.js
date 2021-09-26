import './Header.css'
import React from 'react';
import logo from '../../images/music.png'

const Header = () => {
    return (
        <div className="header">
            {/* navbar */}
            <nav>
                <a href="/home">Home</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
                {/* <img className="logo" src={logo} alt="" /> */}
            </nav>
        </div>
    );
};

export default Header;