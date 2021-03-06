import React from 'react';
import logo from "../../images/logo.png"
import './Header.css'

// here I write everything 

const Header = () => {
    return (
        <div className="Header">
           <img src={logo} alt=""/>
           <nav>
               <a href="/shop">Shop</a>
               <a href="/review">Order review</a>
               <a href="/manage">Manage Inventory</a>
           </nav>
        </div>
    );
};

export default Header;