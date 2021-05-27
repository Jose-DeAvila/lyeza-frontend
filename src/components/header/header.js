import React from 'react';
import Logotype from '../../assets/img/Logotype.svg';
import './style.css';
import { Link } from 'react-router-dom';

function Header({icon, urlIcon}){
  return(
    <>
      <header>
        <nav className="navbar">
          <div className="brand">
            <Link to="/" className="linkHome">
              <img src={Logotype} alt="Lyeza Logo" className="Logotype"/>
            </Link>
          </div>
          
          {
            icon ? 
            <ul className="options">
              <li className="option">
                <Link to={'/'+urlIcon}>
                  {icon}
                </Link>  
              </li>
            </ul>
            :
            ''
          }
        </nav>
      </header>
    </>
  )
}

export default Header;
