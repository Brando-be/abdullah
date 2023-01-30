import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const WorkImg = styled.img`
  scroll-snap-align: center;
  aspect-ratio: ${(props) => (props.isVertical ? '2/3' : '3/2')};
  object-fit: contain;
  margin: 0 40rem;
  width: ${(props) => (props.isVertical ? '100%' : '80%')};
  max-height: 75vh;
  max-width: 75vw;
`;

export const WorkImage = ({
  setImgRefs,
  imgRefs,
  imgName,
  index,
  imgLength,
  setImgRestart,
  imgRestart,
}) => {
  const imgRef = useRef();

  useEffect(() => {
    const _imgRefs = imgRefs;
    _imgRefs.push(imgRef);
    setImgRefs(_imgRefs);
    //console.log("compare", index +'==='+ imgLength)
    if (index + 1 === imgLength && !imgRestart) {
      setImgRestart(true);
    }
  }, []);
  return (
    <>
      <WorkImg
        key={index}
        ref={imgRef}
        isVertical={+imgName.sizes['large-width'] < +imgName.sizes['large-height']}
        src={`${imgName.url}`}
        alt={`${imgName.alt}`}
      />
    </>
  );
};
