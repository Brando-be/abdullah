import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ImageWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  scroll-snap-align: center;
  margin: 50rem 0;
`;

const FirstImage = styled.img`
  height: ${(props) => props.setheight};;
  aspect-ratio: 3/2;
  object-fit: contain;
  align-self: center;
  justify-self: center;
  z-index: 3;
`;

const WorkTitle = styled.p`
  margin-top: 0.8rem;
  font-size: 0.8vw;
  font-size: 1.6rem;
  font-weight: 300;
`;

export const WorkImage = ({ work, index, imgRefs, setImgRefs }) => {
  let navigate = useNavigate();
  const navigateToDetail = (workTitle) => {
    navigate(`/work/${workTitle}`);
  };

  const imgRef = useRef();

  const imageName = work.acf.images[0].image.url;

  useEffect(() => {
    const _imgRefs = imgRefs;
    _imgRefs.push(imgRef);
    setImgRefs(_imgRefs);
  }, []);

  return (
    <ImageWrapper
      ref={imgRef}
      id={index}
      onClick={() => navigateToDetail(work.acf.title)}>
      <FirstImage
        setheight={work.acf.images[0].image.height > work.acf.images[0].image.width ? "45vh" : "30vh"}
        src={`${imageName}`}
        alt='foto'
      />
      <WorkTitle>
        {work.acf.title}, {work.acf.year}
      </WorkTitle>
    </ImageWrapper>
  );
};
