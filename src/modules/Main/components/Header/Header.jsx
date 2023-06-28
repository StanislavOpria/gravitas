import React from "react";

function Header() {
  return (
    <header>
      <img src="src/img/menu.svg" alt="" />
      <img src="src/img/logo.svg" alt="" />
      <a href="#contacts">Связаться с нами</a>
      <ul>
        <li>EN</li>
        <li>UKR</li>
        <li>RU</li>
      </ul>
    </header>
  );
}

export default Header;
