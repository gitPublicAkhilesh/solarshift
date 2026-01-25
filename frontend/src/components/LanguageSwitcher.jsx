import React from 'react';
import { Languages } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import './LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { language, toggleLanguage, isEnglish } = useLanguage();

  return (
    <button
      className="language-switcher"
      onClick={toggleLanguage}
      aria-label={`Switch to ${isEnglish ? 'Hindi' : 'English'}`}
      title={`Switch to ${isEnglish ? 'Hindi' : 'English'}`}
    >
      <Languages size={18} />
      <span className="lang-text">{isEnglish ? 'EN' : 'हिं'}</span>
    </button>
  );
};

export default LanguageSwitcher;
