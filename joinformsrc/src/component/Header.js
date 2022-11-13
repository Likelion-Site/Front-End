import header from "./img/likelion.png";
import React from 'react';
import './css/Header.css';
import { Link } from 'react-router-dom';
function Header(){
    return(
        <>
        <div id="headerBox" style={{ zIndex: 100 }}>
          <img src={header} className="headerLogo" alt="React" />
  
          <input
            class="menu-icon"
            type="checkbox"
            id="menu-icon"
            name="menu-icon"
          />
          <label for="menu-icon"></label>
          <nav class="nav">
            <ul class="pt-5">
              <li>
                <a href="#">home</a>
              </li>
              <li>
                <a href="#">about us</a>
              </li>
              <li>
                <a href="#">activity</a>
              </li>
              <li>
                <Link to="/form">join us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );

};

export default Header; //다른 js파일에서 불러올 수 있도록 내보냄