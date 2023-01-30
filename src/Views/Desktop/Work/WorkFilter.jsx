import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const FilterWrapper = styled.div`
  grid-column: 2;
  grid-row: 1;
  margin: 0 0 2rem 0;
  z-index: 999;
  align-self: flex-end;
  font-family: Base Gotesk, sans-serif;
  font-size: 1vw;
  font-size: 2rem;
  width: max-content;
  max-width: calc(100vw / 4 - 4rem);
  overflow: visible;
  height: 3rem;
  display: flex;
  align-items: end;
  flex-flow: row;
  :hover p{
    text-decoration: underline;
  }

  span{
    margin-right: 0.8rem;
  }
`;

const FilterItem = styled.button`
  font-size: 1vw;
  font-size: 2rem;
  font-family: Base Grotesk, sans-serif;
  white-space: nowrap;
  margin-right: 0.2rem;

  font-weight: normal;
  text-decoration: ${(props) => (props.underlined ? 'underline' : 'none')};
  &:hover {
    text-decoration: underline;
  }
`;

export const WorkFilter = ({ setNewFilter, filter }) => {
  const [openFilter, setOpenFilter] = useState(false);
  const { t } = useTranslation();
  if (filter !== '') {
    return (
      <FilterWrapper onClick={() => setOpenFilter(false)}>
        <span>
        {'—'}
        </span>
        <FilterItem
          underlined={filter === 'all' ? true : false}
          onClick={() => setNewFilter('')}>
          {t('all')}
        </FilterItem>
        <span>
        {',  '}
        </span>
        <FilterItem
          underlined={filter === 'retail' ? true : false}
          onClick={() => setNewFilter('retail')}>
          {t('retail')}
        </FilterItem>
        <span>
        {',  '}
        </span>
        <FilterItem
          underlined={filter === 'hospitality' ? true : false}
          onClick={() => setNewFilter('hospitality')}>
          {t('hospitality')}
        </FilterItem>
        <span>
        {',  '}</span>
        <FilterItem
          underlined={filter === 'public space' ? true : false}
          onClick={() => setNewFilter('public space')}>
          {t('public space')}
        </FilterItem>
        <span>
        {',  '}
        </span>
        <FilterItem
          underlined={filter === 'private' ? true : false}
          onClick={() => setNewFilter('private')}>
          {t('private')}
        </FilterItem>
        <span>
        {', '}
        </span>
        <FilterItem
          underlined={filter === 'object' ? true : false}
          onClick={() => setNewFilter('object')}>
          {t('object')}
        </FilterItem>
      </FilterWrapper>
    );
  }
  return (
    <FilterWrapper
      onClick={() => setNewFilter('all')}>
     <span>+</span><p>  Filter</p>
    </FilterWrapper>
  );
};
