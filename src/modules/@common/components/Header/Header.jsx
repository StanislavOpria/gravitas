import React from "react";
import LngSwitcher from "./LngSwitcher/LngSwitcher";
import { useTranslation } from 'react-i18next';

function Header() {
    const { t } = useTranslation();
  return (
    <header>
      {/* <img src="src/img/menu.svg" alt="" />
      <img src="src/img/logo.svg" alt="" /> */}
      <a href="#contacts">{t('common').header.contactUs }</a>
      <LngSwitcher/>
    </header>
  );
}

export default Header;
