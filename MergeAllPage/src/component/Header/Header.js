import header from "./likelion.png";
import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
function Header(){
    return(
        <>
        <div id="headerBox" style={{ zIndex: 100 }}>
          <Link to="/"><img src={header} className="headerLogo" alt="React" /></Link>
  
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
                <Link to='/'>home</Link>
              </li>
              <li>
                <Link to="/likelion">about us</Link>
              </li>
              <li>
                <a href="#">activity</a>
              </li>
              <li>
                <Link to="/formmain">join us</Link>
              </li>
            </ul>
          </nav>
        </div>
      </>
    );

};

export default Header; //다른 js파일에서 불러올 수 있도록 내보냄