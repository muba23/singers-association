import './Header.css'
import React from 'react';
import logo from '../../images/singer.png'

const Header = () => {
    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            {/* navbar */}
            <nav>
                    <h4 className="name" >TheSingersAssociation</h4>
                    <a href="/home">Home</a>
                    <a href="/orders">Order Review</a>
                    <a href="/contact" id="contact">Contact Us</a>
            </nav>
            <div className="team">
                <h2>Make A Singers Team</h2>
                <p>A good song brings back all the memories. Choose the best singers from our association.</p>
                <h3>Total Singers: 10 Millions {}</h3>
            </div>
        </div>
    );
};

export default Header;