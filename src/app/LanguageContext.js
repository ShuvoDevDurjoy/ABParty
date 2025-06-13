// context/LanguageContext.js
'use client';

import { createContext, useContext, useState } from 'react';

export const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ initialLang = 'bn', children }) => {
  const [language, setLanguage] = useState(initialLang);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
