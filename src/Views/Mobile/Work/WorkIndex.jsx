import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const WorkIndexWrapper = styled.div`
  display: grid;
  font-size: 0.9vw;
  font-size: 1.8rem;
  grid-template-columns: 1.5fr 1fr;
  border-bottom: solid 0.1rem;
  margin-bottom: 0.5rem;
`;

const WorkYear = styled.p`
  text-align: start;
  white-space: nowrap;
`;

export const WorkIndex = ({ work }) => {
  let navigate = useNavigate();
  const navigateToDetail = (workTitle) => {
    navigate(`${workTitle}`);
  };
  const { t } = useTranslation();
  return (
    <WorkIndexWrapper onClick={() => navigateToDetail(work.acf.title)}>
      <p>{work.acf.title}</p>
      <WorkYear>({t(`${work.acf.category}`)})</WorkYear>
    </WorkIndexWrapper>
  );
};
