import styled from 'styled-components';
import { fade } from '../../../style';

import logo from '../../../assets/bjornLogo.svg';

const TextWrapper = styled.div`
  height: 50%;
  grid-column: 1 / 5;
  grid-row: 1;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  animation: ${fade} 1s ease-in;
`;

const LogoImg = styled.img`
  width: 65%;
`;

export const BackgroundText = () => {
  return (
    <TextWrapper>
      <LogoImg src={logo} />
    </TextWrapper>
  );
};
