import React from "react";
import logo from '../PizzaLogo.png'
import { Link } from "react-router-dom"


function Header({count}) {

    return(
        <header>
            <Link to="/" className='header_logo_href'>
                <img className="header_logo"  src={ logo } alt="Logo"/>
            </Link>
            <Link to="/cart" className='header_cart_href'>
                <button className='header_cart'>Кошик: {count}</button>
            </Link>
        </header>
    )
}

export default Header;