import { t } from 'i18next';
import { useState } from 'react';
import Div100vh from 'react-div-100vh';
import { useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import { works } from '../../../Constants/Works';
import { BjornTextTopMobile, Underline } from '../../../style';
import { WorkImageWork } from './WorkImageWork';
import { WorkIndex } from './WorkIndex';

const WorkWrapper = styled(Div100vh)`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
`;

const WorkListWrapper = styled.div`
  height: 100%;
  max-height: 90vh;
  font-weight: 600;
  overflow-y: scroll;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  margin: 6rem 2rem 2rem 2rem;
`;

const WorkNavWrapper = styled.div`
  padding: 0 2rem 2rem 2rem;
  display: grid;
  grid-template-columns: 1.5fr 1fr;
  align-items: flex-end;
  justify-content: space-between;
  font-family: Base Grotesk, sans-serif;
  font-size: 0.8vw;
  font-size: 1.6rem;

  button {
    font-size: 0.8vw;
    font-size: 1.6rem;
    text-align: start;
  }
`;

const WorkTopTitle = styled(BjornTextTopMobile)`
  padding: 2rem 0 0 2rem;
`;

const ShowFilterButton = styled.button`
  margin: 0rem 0 0.5rem 0.7rem;
`;

const FilterWrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  justify-content: flex-end;
`;

export const Work = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const [showFilter, setShowFilter] = useState();
  const [filter, setFilter] = useState(null);

  const [showIndex, setShowIndex] = useState(params.get('index'));

  const changeWorkView = (bool) => {
    setShowIndex(bool);
  };

  return (
    <WorkWrapper>
      <WorkTopTitle to={'/home'}>{t('Work')},</WorkTopTitle>
      <WorkListWrapper>
        {works.map((work, index) => {
          if (!filter) {
            if (showIndex) {
              return <WorkIndex key={index} work={work} index={index} />;
            } else {
              return <WorkImageWork key={index} work={work} index={index} />;
            }
          }
          if (work.acf.category === filter) {
            if (showIndex) {
              return <WorkIndex key={index} work={work} index={index} />;
            }
            return <WorkImageWork key={index} work={work} index={index} />;
          }
        })}
      </WorkListWrapper>
      <WorkNavWrapper>
        <div>
          <button onClick={() => changeWorkView(false)}>
            {showIndex ? t('Selected') : <Underline>{t('Selected')}</Underline>}
          </button>
          ,{' '}
          <button onClick={() => changeWorkView(true)}>
            {' '}
            {showIndex ? <Underline>Index</Underline> : 'Index'}
          </button>
        </div>
        {showFilter ? (
          <FilterWrapper>
            <ShowFilterButton onClick={() => setFilter('object')}>
              {t('object')}
            </ShowFilterButton>
            <ShowFilterButton onClick={() => setFilter('private')}>
              {t('private')}
            </ShowFilterButton>
            <ShowFilterButton onClick={() => setFilter('public space')}>
              {t('public space')}
            </ShowFilterButton>
            <ShowFilterButton onClick={() => setFilter('hospitality')}>
              {t('hospitality')}
            </ShowFilterButton>
            <ShowFilterButton onClick={() => setFilter('retail')}>
              {t('retail')}
            </ShowFilterButton>
            <ShowFilterButton onClick={() => setFilter(null)}>
              {t('all')}
            </ShowFilterButton>
            <button onClick={() => setShowFilter(false)}>
              - {t('FilterBy')}
            </button>
          </FilterWrapper>
        ) : (
          <button onClick={() => setShowFilter(true)}>+ {t('FilterBy')}</button>
        )}
      </WorkNavWrapper>
    </WorkWrapper>
  );
};
