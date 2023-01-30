import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LanguageChange } from '../../../Components/LanguageChange';
import { works } from '../../../Constants/Works';
import { BackToHomeLink, Underline, BjornTextTop } from '../../../style';
import { WorkFilter } from './WorkFilter';
import { WorkOverviewImg } from './WorkOverviewImg';

const WorkWrapper = styled.div`
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

const StyledLink = styled(Link)`
  text-decoration: none;
  font-size: 0.8vw;
  font-size: 1.6rem;
  margin: 0;

  :hover {
    text-decoration: underline;
  }
`;

const WorkListWrapper = styled.div`
  grid-row: 1;
  grid-column: 1/5;
  display: grid;
  width: 80vw;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1vw;
  grid-row-gap: 10rem;
  margin: 0 auto;
  max-height: 80vh;
  overflow-x: scroll;
  scroll-behavior: smooth;
`;

export const WorkOverview = () => {
  const [filter, setFilter] = useState('');

  const { t } = useTranslation();

  return (
    <WorkWrapper>
      <NavWrapper>
        <BjornTextTop to='/'>{t('Work')}</BjornTextTop>
        <LinkWrapper>
          <StyledLink to={'/work'}>Index,</StyledLink>
          <StyledLink to={'/overview'}>
            {' '}
            <Underline>{t('Overview')}</Underline>
          </StyledLink>
        </LinkWrapper>
      </NavWrapper>

      <WorkListWrapper>
        {works.map((work) => {
          if (!filter || filter === 'all') {
            return <WorkOverviewImg work={work} />;
          }

          if (work.acf.category === filter) {
            return <WorkOverviewImg work={work} />;
          }
        })}
      </WorkListWrapper>
      <WorkFilter setNewFilter={setFilter} filter={filter} />
      <BackToHomeLink to={'/'}>{t('BackHome')}</BackToHomeLink>
      <LanguageChange />
    </WorkWrapper>
  );
};
