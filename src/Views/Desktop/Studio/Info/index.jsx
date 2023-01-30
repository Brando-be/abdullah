import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { LanguageChange } from '../../../../Components/LanguageChange';
import { BackToHomeLink, BjornTextTop, StyledLink, Underline } from '../../../../style';
import { infoViews } from './infoViews';
import { InfoViewSwitch } from './InfoViewSwitch';

const StudioWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
  max-height: 100vh;
  grid-gap: 2rem;
`;

const NavWrapper = styled.div`
  grid-column: 1;
  grid-row: 1;
  margin: 2rem;
  z-index: 5;
`;

const LinkWrapper = styled.div`
    margin: 0.5rem 0 0 0;
`;

const StudioInfoButtonsWrapper = styled.div`
  grid-column: 2;
  font-size: 1vw;
  font-size: 2rem;
  grid-row: 1;
  align-self: flex-end;
`;

const StudioInfoButton = styled.button`
  font-size: 1vw;
  font-size: 2rem;
  margin: 0;
  margin-bottom: 2rem;
  margin-right: 0.1rem;
  :hover {
    text-decoration: underline;
  }
`;

export const StudioInfo = () => {
  const [infoView, setInfoView] = useState(infoViews.CONTACT);
  const { t } = useTranslation();
  return (
    <StudioWrapper>
      <NavWrapper>
        <BjornTextTop to='/'>Studio</BjornTextTop>
        <LinkWrapper>
          <StyledLink to={'/studio'}>{t('Profile')}, </StyledLink>
          <StyledLink to={'/clients'}>{t('Clients')}, </StyledLink>
          <StyledLink to={'/info'}>
            <Underline>Info</Underline>
          </StyledLink>
        </LinkWrapper>
      </NavWrapper>
      <InfoViewSwitch view={infoView} />
      <StudioInfoButtonsWrapper>
        <StudioInfoButton onClick={() => setInfoView(infoViews.CONTACT)}>
          {infoView === infoViews.CONTACT ? (
            <Underline>Contact</Underline>
          ) : (
            'Contact'
          )}
          ,
        </StudioInfoButton>{' '}
        <StudioInfoButton onClick={() => setInfoView(infoViews.IMPRINT)}>
          {infoView === infoViews.IMPRINT ? (
            <Underline>Imprint</Underline>
          ) : (
            'Imprint'
          )}
          ,
        </StudioInfoButton>
      </StudioInfoButtonsWrapper>
      <BackToHomeLink to={'/'}>{t('BackHome')}</BackToHomeLink>
      <LanguageChange />
    </StudioWrapper>
  );
};
