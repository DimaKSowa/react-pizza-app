import React from "react";
import logo from '../PizzaLogo.png'

function FooterInfo() {

    return(
        <footer>
        <img className='footer_logo' src={ logo } alt='Logo'/>
        <div className='footer_items'>
          <h3>+38 067 766 7605</h3>
          <p>м.Львів, вул.Тютюників 25</p>
        </div>
        <div className='footer_items'>
          <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <h3>Facebook</h3>
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
            <h3>Instagram</h3>
          </a>
          <a href="https://www.tiktok.com/" target="_blank" rel="noopener noreferrer">
            <h3>TikTok</h3>
          </a>
          
        </div>

      </footer>
    )
}

export default FooterInfo;