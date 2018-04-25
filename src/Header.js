import React from 'react';
import logo from "./logo.svg";

const Header = () =>

<header className="main-header">
  <div className="logo">
    <a href="#hjem">
      <img src={logo} alt=""/>
    </a>
  </div>

  <ul className="nav">
    <li> <a id="hjem" href="hjem">Hjem</a> </li>
    <li> <a id="omOss" href="omOss">Om Oss</a> </li>
    <li> <a id="prosjekter" href="prosjekter">Prosjekter</a> </li>
    <li> <a id="kontakt" href="kontakt">Kontakt</a> </li>
  </ul>
</header>

export default Header;
