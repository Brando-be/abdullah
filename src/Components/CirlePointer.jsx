import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
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
  z-index: 9999;
  pointer-events: none;
  @media (max-width: 860px) {
    display: none;
  }
`;

export const CirclePointer = () => {
  const { x, y } = useMousePos();
  return (
    <>
      <Cirlce
        className='dot'
        style={{ left: `${x}px`, top: `${y}px` }}></Cirlce>
    </>
  );
};
