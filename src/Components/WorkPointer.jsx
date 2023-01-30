import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { works } from '../Constants/Works';
import { searchByTitle, searchIndexByTitle } from '../utils/findWorks';
import useMousePos from '../utils/useMousePos';

const Cirlce = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 20px;
  height: 20px;
  background-color: white;
  mix-blend-mode: difference;
  border-radius: 100%;
  transform: translate(-50%, -50%);
  -webkit-transition-duration: 80ms;
  transition-duration: 80ms;
  -webkit-transition-timing-function: ease-out;
  transition-timing-function: ease-out;
  will-change: width, height, transform, border;
  z-index: 999;
  white-space: nowrap;
  pointer-events: none;
  p {
    position: absolute;
    color: white;
    mix-blend-mode: difference;
    text-align: center;
    z-index: 1000;
    top: 1px;
    left: -40px;
    font-size: 0.8vw;
    font-size: 1.6rem;
  }
  @media (max-width: 860px) {
    display: none;
  }
`;

export const WorkPointer = () => {
  const { x, y } = useMousePos();

  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(false);

  useEffect(() => {
    if (
      y < window.innerHeight / 8 &&
      x > (window.innerWidth / 5) * 2 &&
      x < (window.innerWidth / 5) * 3
    ) {
      setShowRight(false);
      setShowLeft(true);
    } else if (
      y > (window.innerHeight / 8) * 7 &&
      x > (window.innerWidth / 5) * 2 &&
      x < (window.innerWidth / 5) * 3
    ) {
      setShowLeft(false);
      setShowRight(true);
    } else {
      setShowLeft(false);
      setShowRight(false);
    }
  }, [y]);

  return (
    <>
      <Cirlce className='dot' style={{ left: `${x}px`, top: `${y}px` }}>
        {' '}
        <p>
          {' '}
          {showLeft ? 'Prev Project' : ''} {showRight ? 'Next Project' : ''}
        </p>
      </Cirlce>
    </>
  );
};
