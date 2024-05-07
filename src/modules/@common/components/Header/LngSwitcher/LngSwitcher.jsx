import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const LngSwitcher = () => {
  const [currentLng, setCurrentLng] = useState('ua');

  const { i18n } = useTranslation();

  useEffect(() => {
    const currentLng = localStorage.getItem("LANGUAGE_KEY");
      setCurrentLng(currentLng)
  }, []);

  useEffect(() => {
    i18n.changeLanguage(currentLng);
  }, [currentLng, i18n]);

  return (
   
      <ul>
        <li><button type="button" onClick={() => setCurrentLng('ua')}>UA</button></li>
        <li><button type="button" onClick={() => setCurrentLng('en')}>EN</button></li>
        <li><button type="button" onClick={() => setCurrentLng('ru')}>RU</button></li>
      </ul>
     
  );
};

export default LngSwitcher;

