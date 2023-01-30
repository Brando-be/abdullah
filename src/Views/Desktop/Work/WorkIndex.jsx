import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LanguageChange } from '../../../Components/LanguageChange';
import { works } from '../../../Constants/Works';
import { BackToHomeLink, Underline, BjornTextTop } from '../../../style';
import { WorkFilter } from './WorkFilter';

const WorkWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
  max-height: 100vh;
  grid-gap: 2rem;
`;

const WorkListWrapper = styled.ul`
  grid-column: 2/5;
  grid-row: 1;
  height: max-content;
  padding: 0;
  margin-top: 2rem;
  pointer-events: none;
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

const WorkIndexItem = styled.li`
  margin-top: 0.5rem;
  display: grid;
  font-size: 1.6vw;
  font-size: 3.2rem;
  grid-template-columns: 0.2fr 2fr 0.5fr;
  grid-gap: 2rem;
  pointer-events: ${(props) => (props.notCrossed ? 'auto' : 'none')};
  height: max-content;
  color: ${(props) => (props.notCrossed ? 'white' : 'black')};
  p {
    mix-blend-mode: ${(props) => (props.notCrossed ? 'difference' : 'none')};
    z-index: 5;
    height: max-content;
    width: max-content;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    grid-row: 1;
    opacity: ${(props) => (props.notCrossed ? '1' : '0.15')};
  }

  &:hover .workImage${(props) => props.nr} {
    opacity: 1;
  }

  &:hover .workItemTitle {
    text-decoration: line-through;
  }
`;

const WorkIndexText = styled.p`
  grid-column: 2;

  span {
    text-transform: lowercase;
  }
`;

const WorkIndexNumber = styled.p`
  grid-column: 1;
`;

const WorkIndexYear = styled.p`
  grid-column: 3;
`;

const WorkImage = styled.img`
  left: calc(50vw - 10vw);
  top: 10%;
  grid-column: 1/2;
  grid-row: 1;
  position: absolute;
  width: 50%;
  max-width: 40rem;
  aspect-ratio: 2/3;
  object-fit: cover;
  opacity: 0;
  z-index: 4;
  transition: 0.2s ease-in opacity;
  pointer-events: none;
`;

export const WorkIndex = () => {
  let navigate = useNavigate();

  const [filter, setFilter] = useState('');

  const navigateToDetail = (workTitle) => {
    navigate(`${workTitle}`);
  };
  const { t } = useTranslation();

  return (
    <WorkWrapper>
      <NavWrapper>
        <BjornTextTop to='/'>{t('Work')}</BjornTextTop>
        <LinkWrapper>
          <StyledLink to={'/work'}>
            <Underline>Index</Underline>,{' '}
          </StyledLink>
          <StyledLink to={'/overview'}>{t('Overview')}</StyledLink>
        </LinkWrapper>
      </NavWrapper>

      <WorkListWrapper>
        {works.map((work, index) => {
          const number = index + 1;
          const imageName = work.acf.images[0].image;

          return (
            <WorkIndexItem
              notCrossed={
                filter === work.acf.category || filter === 'all' || filter === ''
                  ? true
                  : false
              }
              onClick={() => navigateToDetail(work.acf.title)}
              key={work.title}
              nr={number}>
              <WorkIndexNumber className='backgroundHover'>
                {number.toLocaleString('en-US', {
                  minimumIntegerDigits: 2,
                  useGrouping: false,
                })}
              </WorkIndexNumber>
              <WorkIndexText className='workItemTitle'>
                {work.acf.title} <span>{t('For')}</span> {work.acf.client}
              </WorkIndexText>
              <WorkIndexYear className='backgroundHover'>
                {work.acf.year}
              </WorkIndexYear>
              <WorkImage
                className={`workImage${number}`}
                src={`${imageName.url}`}
              />
            </WorkIndexItem>
          );
        })}
      </WorkListWrapper>
      <WorkFilter setNewFilter={setFilter} filter={filter} />
      <BackToHomeLink to={'/'}>{t('BackHome')}</BackToHomeLink>
      <LanguageChange />
    </WorkWrapper>
  );
};
