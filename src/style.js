import { Link } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

export const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
   opacity: 1;
  }
`;

export const fadeDelay = css`
  opacity: 0;
  animation: ${fade} 3s ease-in 3.5s forwards;
`;

export const fadeDelayWork = css`
  opacity: 0;
  animation: ${fade} .5s ease-in 1s forwards;
`;

export const BjornTextTop = styled(Link)`
  text-decoration: none;
  line-height: 1;
  text-transform: uppercase;
  font-size: 1.5vw;
  font-size: 3rem;
  font-weight: 500;
  margin: 0;
  font-family: Base Grotesk, sans-serif;
`;

export const Underline = styled.span`
  text-decoration: underline;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 0.8vw;
  font-size: 1.6rem;
  margin: 0;

  :hover {
    text-decoration: underline;
  }
`;

export const BackToHomeLink = styled(StyledLink)`
  grid-column: 3;
  grid-row: 1;
  justify-self: flex-end;
  align-self: flex-end;
  margin-bottom: 2.2rem;
  font-family: Base Gotesk, sans-serif;
  z-index: 1000;
  font-size: 1vw;
  font-size: 2rem;
`;

export const BjornTextTopMobile = styled(Link)`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1vw;
  font-size: 2rem;
  z-index: 5000;
  position: fixed;
  background-color: '#e3e3e3';
  width: 100vw;
  display: flex;
  align-items: center;
  text-decoration: none;
  line-height: 0.9;
  font-family: Base Gotesk, sans-serif;
`;

// background-color: ${(props) =>
//   props.backgroundcolor ? props.backgroundcolor : '#e3e3e3'};

//transition: background-color 0.3s ease-in;
