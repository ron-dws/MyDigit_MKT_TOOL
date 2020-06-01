import React from 'react';
import '../CSS/Style-main.css';

function Header(props){
   const titre = "East Start Wireless";
    return(
        <div className="header-main">
          <img src="/imgs/es_logo.png" alt="east star wireless" />
          <h1>{ titre }</h1>
        </div>
    )
}

export default Header;