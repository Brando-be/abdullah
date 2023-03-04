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
  font-size: 1.8rem;
  margin: 0;

  :hover {
    text-decoration: underline;
  }
`;

const WorkListWrapper = styled.div`
  align-self: center;
  /* margin: 0 auto 80px auto; */
  /* margin: 80px auto 80px auto; */
  margin: 0 auto;
  grid-row: 1;
  grid-column: 1/5;
  display: grid;
  width: 80vw;
  grid-template-columns: 1fr 1fr;
  /* grid-column-gap: 1vw; */
  /* grid-row-gap: 10rem; */
  max-height: 80vh;
  overflow-x: scroll;
  scroll-behavior: smooth;
  justify-content: center;
  align-items: center;
  place-items: center;
`;

const ImgDiv = styled.div`
  width: 80%;
  margin: 90px 0;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.8vw;
  font-size: 1.8rem;
  p {
    opacity: 0;
    transition: all 0.3s ease-in;
  }
  :hover p {
    opacity: 1;
  }
  img {
    min-height: 60vh;
    max-height: 500px;
  }
  :hover img {
    opacity: 0.5;
    /* transform: scale(0.95); */
  }
`;

const WorkImg = styled.img`
  /* height: 100%; */
  width: 100%;
  /* aspect-ratio: 3/2; */
  object-fit: contain;
  /* scroll-snap-align: center; */
  transition: all 0.3s ease-in;
`;

export const WorkOverview = () => {
  const [filter, setFilter] = useState('');

  const { t } = useTranslation();

  const navigate = useNavigate();

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
          // if (!filter || filter === 'all') {
          //   return <WorkOverviewImg work={work} />;
          // }

          // if (work.acf.category === filter) {
          //   return <WorkOverviewImg work={work} />;
          // }
          const imgName = work.acf.images[0].image;
          if (work.acf.category === filter) {
            return (
              <ImgDiv onClick={() => navigate(`/work/${work.acf.title}`)}>
                <WorkImg src={`${imgName.url}`} alt={`${imgName.alt}`} />
                <p>
                  {work.acf.title}, {work.acf.year}
                </p>
              </ImgDiv>
            );
          }
          if (!filter || filter === 'all')
            return (
              <ImgDiv onClick={() => navigate(`/work/${work.acf.title}`)}>
                <WorkImg src={`${imgName.url}`} alt={`${imgName.alt}`} />
                <p>
                  {work.acf.title}, {work.acf.year}
                </p>
              </ImgDiv>
            );
        })}
      </WorkListWrapper>
      <WorkFilter setNewFilter={setFilter} filter={filter} />
      <BackToHomeLink to={'/'}>{t('BackHome')}</BackToHomeLink>
      <LanguageChange />
    </WorkWrapper>
  );
};
