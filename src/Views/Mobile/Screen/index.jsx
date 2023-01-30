import styled from 'styled-components';
import Div100vh from 'react-div-100vh';
import { useState } from 'react';
import { StyledLink } from '../../../style';
import { Link } from 'react-router-dom';

const HomeWrapper = styled(Div100vh)`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  background-image: url(./background-image-mobile.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 100%;
`;

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
`;



export const MobileScreen = () => {
  const [vh, setVh] = useState(`${window.innerHeight}px`);
  return (
    <HomeWrapper vh={vh} backgroundimg='./bjorn.jpg'>
      <NavLink to='/home'><LogoImg src='./logo.svg'></LogoImg></NavLink>
    </HomeWrapper>
  );
};
