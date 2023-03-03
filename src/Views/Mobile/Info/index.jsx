import React from 'react';
import { useState } from 'react';
import { infoViews } from './infoViews';
import { InfoViewSwitch } from './InfoViewSwitch';
import styled from 'styled-components';
import { Underline, BjornTextTopMobile } from '../../../style';
import CrossSVG from '../../../assets/cross.svg';
import { useNavigate } from 'react-router-dom';
import Div100vh from 'react-div-100vh';

const InfoContactWrapper = styled(Div100vh)`
  padding: 2rem;
`;

const StudioInfoButtonsWrapper = styled.div`
  height: 4rem;
  font-size: 2rem;
  position: fixed;
  bottom: 0px;
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #e3e3e3;
`;

const StudioInfoButton = styled.button`
  font-size: 1.6rem;
  margin: 0;
  margin-bottom: 1rem;
  margin-right: 0.1rem;
  :hover {
    text-decoration: underline;
  }
`;

const MobileInfo = () => {
  const [infoView, setInfoView] = useState(infoViews.CONTACT);
  const navigate = useNavigate();
  return (
    <InfoContactWrapper>
      <div
        style={{
          position: 'fixed',
          top: 0,
          width: '100%',
          height: '50px',
          background: '#e3e3e3',
          zIndex: 1,
        }}
      />
      <BjornTextTopMobile to='/home'>Info</BjornTextTopMobile>
      <InfoContactWrapper>
        <InfoViewSwitch view={infoView} />
      </InfoContactWrapper>
      <StudioInfoButtonsWrapper>
        <div>
          <StudioInfoButton onClick={() => setInfoView(infoViews.CONTACT)}>
            {infoView === infoViews.CONTACT ? (
              <Underline>Contact</Underline>
            ) : (
              'Contact'
            )}
            ,
          </StudioInfoButton>{' '}
          <StudioInfoButton onClick={() => setInfoView(infoViews.IMPRINT)}>
            {infoView === infoViews.IMPRINT ? (
              <Underline>Imprint</Underline>
            ) : (
              'Imprint'
            )}
            ,
          </StudioInfoButton>{' '}
          <StudioInfoButton onClick={() => setInfoView(infoViews.PRIVACY)}>
            {infoView === infoViews.PRIVACY ? (
              <Underline>Privacy</Underline>
            ) : (
              'Privacy'
            )}
            ,
          </StudioInfoButton>
        </div>
        <span>
          <img
            src={CrossSVG}
            alt='cross'
            style={{ width: 34 }}
            onClick={() => navigate('/')}
          />
        </span>
      </StudioInfoButtonsWrapper>
    </InfoContactWrapper>
  );
};

export default MobileInfo;
