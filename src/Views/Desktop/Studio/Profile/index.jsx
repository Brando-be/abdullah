import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { LanguageChange } from '../../../../Components/LanguageChange';
import { BackToHomeLink, BjornTextTop, StyledLink, Underline } from '../../../../style';
import { profileViews } from './profileViews';
import { ProfileViewSwitch } from './ProfileViewSwitch';

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

const StudioProfileButtonsWrapper = styled.div`
  grid-column: 2;
  grid-row: 1;
  align-self: flex-end;
  z-index: 500;
  font-size: 1vw;
  font-size: 2rem;
`;

const StudioProfileButton = styled.button`
  font-size: 1vw;
  font-size: 2rem;
  margin: 0;
  margin-bottom: 2rem;

  :hover {
    text-decoration: underline;
  }
`;

export const StudioProfile = () => {
  const [profileView, setProfileView] = useState(profileViews.ABOUT);
  const { t } = useTranslation();

  return (
    <StudioWrapper>
      <NavWrapper>
        <BjornTextTop to='/'>Studio</BjornTextTop>
        <LinkWrapper>
          <StyledLink to={'/studio'}>
            <Underline>{t('Profile')}</Underline>,{' '}
          </StyledLink>
          <StyledLink to={'/clients'}>{t('Clients')}, </StyledLink>
          <StyledLink to={'/info'}>Info</StyledLink>
        </LinkWrapper>
      </NavWrapper>
      <ProfileViewSwitch view={profileView} />
      <StudioProfileButtonsWrapper>
        <StudioProfileButton onClick={() => setProfileView(profileViews.ABOUT)}>
          {profileView === profileViews.ABOUT ? (
            <Underline>{t('About')}</Underline>
          ) : (
            t('About')
          )}
          ,{' '}
        </StudioProfileButton>{' '}
        <StudioProfileButton
          onClick={() => setProfileView(profileViews.APPROACH)}>
          {profileView === profileViews.APPROACH ? (
            <Underline>{t('Approach')}</Underline>
          ) : (
            t('Approach')
          )}
          ,{' '}
        </StudioProfileButton>{' '}
        <StudioProfileButton
          onClick={() => setProfileView(profileViews.PEOPLE)}>
          {profileView === profileViews.PEOPLE ? (
            <Underline>{t('People')}</Underline>
          ) : (
            t('People')
          )}
        </StudioProfileButton>{' '}
      </StudioProfileButtonsWrapper>
      <BackToHomeLink to={'/'}>{t('BackHome')}</BackToHomeLink>
      <LanguageChange />
    </StudioWrapper>
  );
};
