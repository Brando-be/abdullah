import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { LanguageChange } from '../../../../Components/LanguageChange';
import { BackToHomeLink, BjornTextTop, StyledLink, Underline } from '../../../../style';

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

const ClientsWrapper = styled.div`
  grid-column: 2/4;
  grid-row: 1;
  margin-top: 2rem;
`;

const ClientsText = styled.p`
  font-size: 1.4vw;
  font-size: 2.8rem;
  margin-bottom: 4rem;
`;

export const StudioClients = () => {
  const { t } = useTranslation();
  return (
    <StudioWrapper>
      <NavWrapper>
        <BjornTextTop to='/'>Studio</BjornTextTop>
        <LinkWrapper>
          <StyledLink to={'/studio'}>{t('Profile')}, </StyledLink>
          <StyledLink to={'/clients'}>
            <Underline>{t('Clients')}</Underline>,{' '}
          </StyledLink>
          <StyledLink to={'/info'}>Info</StyledLink>
        </LinkWrapper>
      </NavWrapper>
      <ClientsWrapper>
        <ClientsText>
        {t('AboutClient')}
        </ClientsText>
        <ClientsText>& {t('SelectedClients')}</ClientsText>
      </ClientsWrapper>
      <BackToHomeLink to={'/'}>{t('BackHome')}</BackToHomeLink>
      <LanguageChange />
    </StudioWrapper>
  );
};
