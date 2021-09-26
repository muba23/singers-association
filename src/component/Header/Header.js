import './Header.css'
import React from 'react';
import logo from '../../images/singer.png'

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            {/* navbar */}
            <nav>
                <a href="/home">Home</a>
                <a href="/orders">Order Review</a>
                <a href="/inventory">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;