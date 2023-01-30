import i18next from 'i18next';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const LanguageButton = styled.button`
  grid-row: 1;
  grid-column: 4;
  align-self: flex-end;
  justify-self: end;
  text-transform: uppercase;
  margin: 0 2rem 2rem 0;
  font-size: 1vw;
  font-size: 2rem;
  color: black;
  @media (max-width: 860px) {
    font-size: 1.6rem;
  }
`;

export const LanguageChange = () => {
  const [language, setLanguage] = useState(i18next.language.split('-')[0]);

  useEffect(() => {
    i18next.changeLanguage(language);
  }, [language]);

  return (
    <LanguageButton
      onClick={() =>
        language === 'en' ? setLanguage('nl') : setLanguage('en')
      }>
      {language}
    </LanguageButton>
  );
};
