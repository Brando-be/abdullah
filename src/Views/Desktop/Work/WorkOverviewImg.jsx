import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const OverviewImgWrapper = styled.div`
  margin: 30vh 0;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.8vw;
  font-size: 1.6rem;

  p {
    opacity: 0;
    transition: all 0.3s ease-in;
  }

  :hover p {
    opacity: 1;
  }

  :hover img {
    opacity: 0.5;
    transform: scale(0.95);
  }
`;

const WorkImg = styled.img`
  height: 100%;
  width: max-content;
  aspect-ratio: 3/2;
  object-fit: contain;
  scroll-snap-align: center;
  transition: all 0.3s ease-in;
`;

export const WorkOverviewImg = ({ work }) => {
  const imgName = work.acf.images[0].image;
  let navigate = useNavigate();
  const navigateToDetail = (workTitle) => {
    navigate(`/work/${workTitle}`);
  };
  return (
    <OverviewImgWrapper onClick={() => navigateToDetail(work.acf.title)}>
      <WorkImg
        src={`${imgName.url}`}
        alt={`${imgName.alt}`}
      />
      <p>
        {work.acf.title}, {work.acf.year}
      </p>
    </OverviewImgWrapper>
  );
};
