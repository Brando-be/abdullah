import { useRef } from 'react';
import styled from 'styled-components';
import { BjornTextTopMobile } from '../../../style';

import people1 from '../../../assets/img/people/people1.jpg';
import people2 from '../../../assets/img/people/people2.jpg';
import people3 from '../../../assets/img/people/people3.jpg';
import { Work } from '../Work';
import { t } from 'i18next';
import Div100vh from 'react-div-100vh';

const StudioWrapper = styled(Div100vh)`
  width: calc(100vw - 4rem);
  margin: auto;
  padding: 2rem;
`;

const LongReadWrapper = styled.div`
  height: 100%;
  overflow-y: scroll;
  scroll-behavior: smooth;
  ::-webkit-scrollbar {
    display: none;
  }
  margin-top: 3rem;
`;

const LongReadTitle = styled.p`
  font-family: Base Grotesk, sans-serif;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 0.9vw;
  font-size: 1.8rem;
  margin-bottom: 1rem;
`;

const LongReadText = styled.p`
  font-size: 1vw;
  font-size: 2rem;
`;

const AproachText = styled(LongReadText)`
  margin-top: 2rem;
`;

const AproachTitle = styled.span`
  text-transform: uppercase;
  font-family: Base Grotesk, sans-serif;
  font-size: 0.9vw;
  font-size: 1.8rem;
`;

const BjornImage = styled.img`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 3/2;
  margin-top: 30vh;
`;

const StudioSection = styled.div`
  margin-bottom: 20vh;
`;

const NavWrapper = styled.div`
  position: fixed;
  height: 4rem;
  top: calc(100% - 40px);
  z-index: 998;
  background-color: #e3e3e3;
  width: 100vw;
  display: flex;
  align-items: center;
  button {
    font-size: 0.8vw;
    font-size: 1.6rem;
    margin-right: 0.3rem;
  }
`;

const PeopleItem = styled.div`
  margin-bottom: 10rem;
`;

const PeopleImg = styled.img`
  width: 100%;
  object-fit: cover;
  aspect-ratio: 2/3;
`;

const PeopleInfo = styled.p`
  font-size: 0.8vw;
  font-size: 1.6rem;
`;

export const Studio = () => {
  const aboutRef = useRef();
  const approachRef = useRef();
  const peopleRef = useRef();
  const clientsRef = useRef();
  const infoRef = useRef();

  return (
    <StudioWrapper>
      <BjornTextTopMobile to='/home'>Studio,</BjornTextTopMobile>
      <LongReadWrapper>
        <StudioSection ref={aboutRef}>
          <BjornImage src='./bjorn.jpg' />
          <LongReadTitle>{t('About')}</LongReadTitle>
          <LongReadText>
            {t('Established')}
            {t('Designer')}
          </LongReadText>
          <LongReadText>
          {t('AboutMore')}
          </LongReadText>
        </StudioSection>
        <StudioSection ref={approachRef}>
          <AproachText>
            <AproachTitle>{t('Briefing')}</AproachTitle> <br />
            {t('BriefingText')}
          </AproachText>
          <AproachText>
            <AproachTitle>{t('Concept')}</AproachTitle> <br />
            {t('ConceptText')}
          </AproachText>
          <AproachText>
            <AproachTitle>{t('Realisation')} </AproachTitle>
            <br />
            {t('RealisationText')}
          </AproachText>
        </StudioSection>

        <StudioSection ref={peopleRef}>
          <LongReadTitle>{t('People')}</LongReadTitle>
          <PeopleItem>
            <PeopleImg src={people1} />
            <PeopleInfo>Bjorn Verlinde, Architect & founder</PeopleInfo>
          </PeopleItem>
          <PeopleItem>
            <PeopleImg src={people2} />
            <PeopleInfo>Bjorn Verlinde, Architect & founder</PeopleInfo>
          </PeopleItem>
          <PeopleItem>
            <PeopleImg src={people3} />
            <PeopleInfo>Bjorn Verlinde, Architect & founder</PeopleInfo>
          </PeopleItem>
          <LongReadTitle>Work with us?</LongReadTitle>
          <LongReadTitle>Let's talk!</LongReadTitle>
        </StudioSection>

        <StudioSection>
          <LongReadTitle ref={clientsRef}>{t('Clients')}</LongReadTitle>
          <LongReadText>
            Balls&Glory, Brando, Carcasse, Domus Plus, Effeitalia, Dierendonck,
            ‘t Vliegend Tapijt,Limited Edition, Mint, Modular, Nick Bril,
            Nightingale, Oculus, Oracdecor, Signatuur, The Jane, Verilin, Vonk,
            WAW Floors.
          </LongReadText>
          <LongReadText>& {t('SelectedClients')}</LongReadText>
        </StudioSection>
      </LongReadWrapper>
      <NavWrapper>
        <button onClick={() => aboutRef.current.scrollIntoView()}>
          {t('About')},
        </button>{' '}
        <button onClick={() => approachRef.current.scrollIntoView()}>
          {t('Approach')},
        </button>{' '}
        <button onClick={() => peopleRef.current.scrollIntoView()}>
          {t('People')},
        </button>{' '}
        <button onClick={() => clientsRef.current.scrollIntoView()}>
          {t('Clients')}
        </button>
      </NavWrapper>
    </StudioWrapper>
  );
};
