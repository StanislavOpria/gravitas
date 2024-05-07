import React from "react";

function Footer() {
  return (
    <footer>
      <h1 id="contacts">Связаться с нами</h1>
      <div>
        <div>
          <p>Адрес</p>
          <address>Майдан Независимости 2, офис 727, Киев, 01001</address>
        </div>
        <div>
          <p>Телефон</p>
          <a href="tel:+3800953333333">+ 380 095 333 33 33</a>
          <img src="" alt="Telegram" />
          <img src="" alt="WhatsApp" />
          <img src="" alt="Viber" />
        </div>
        <div>
          <p>E-mail</p>
          <a href="mailto:office@gravitas.com.ua">office@gravitas.com.ua</a>
        </div>
      </div>
      <ul>
        <li>
          <a href="">Facebook</a>
        </li>
        <li>
          <a href="">Linkedin</a>
        </li>
        <li>
          <a href="">Youtube</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
