import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { LanguageChange } from '../../../Components/LanguageChange';
import { works } from '../../../Constants/Works';
import { BjornTextTopMobile, fadeDelay, StyledLink } from '../../../style';
import { WorkImage } from './WorkImage';
import Div100vh from 'react-div-100vh';

const HomeWrapper = styled(Div100vh)`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  background-color: ${(props) => props.backgroundcolor};
  transition: background-color 0.3s ease-in;
`;

const TopWrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: Base Grotesk, sans-serif;
  padding: 2rem;
  height: 2rem;
  

  p {
    font-size: 0.8vw;
    font-size: 1.6rem;
    left: calc(100vw - 4rem);
    position: fixed;
    z-index: 6000;
  }
`;

const WorkWrapper = styled.div`
  margin: 0rem 2rem;
  height: 100%;
  max-height: 85vh;
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const NavWrapper = styled.div`
  font-family: Base Grotesk, sans-serif;
  font-size: 0.8vw;
  font-size: 1.6rem;
  padding: 2rem 0rem 2rem 2rem;
  a {
    font-size: 0.8vw;
    font-size: 1.6rem;
    font-family: Base Grotesk, sans-serif;
    text-decoration: none;
  }
`;

const NavLink = styled(StyledLink)`
  text-transform: capitalize;
`;

const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: max-content;
`;

export const Home = () => {
  const [activeWork, setActiveWork] = useState(1);
  const [imgRefs, setImgRefs] = useState([]);
  const [bgColor, setBgColor] = useState('white');
  const [vh, setVh] = useState(`${window.innerHeight}px`);
  const scrollRef = useRef();

  useEffect(() => {
    // if (activeWork >= works.length) {
    //   return;
    // }
    const scroll = setInterval(
      () => imgRefs[activeWork].current.scrollIntoView(),
      10000
    );

    return () => clearInterval(scroll);
  }, [activeWork]);

  useEffect(() => {
    setVh(`${window.innerHeight}px`);
  }, [window.innerHeight]);

  const scrollDirection = (e) => {
    const devideBy = scrollRef.current.scrollHeight / works.length;
    const scrollDevided = e.target.scrollTop / devideBy + 1;
    if (Math.round(scrollDevided) < 1) {
      setActiveWork(1);
    } else {
      setActiveWork(Math.round(scrollDevided));
    }
  };
  const colors = ['#e3e3e3', '#e3e3e3', '#e3e3e3', '#e3e3e3'];

  useEffect(() => {
    const dividedNr = Math.floor(activeWork / 4);
    if (dividedNr < colors.length) {
      setBgColor(colors[dividedNr]);
    } else {
      setBgColor(colors[0]);
    }
  }, [activeWork]);
  const { t } = useTranslation();
  return (
    <HomeWrapper vh={vh} backgroundcolor={bgColor}>
      <TopWrapper>
        <BjornTextTopMobile backgroundcolor={bgColor} to='/'>
          Bjorn Verlinde
        </BjornTextTopMobile>
        <p>
          {activeWork}/{works.length}
        </p>
      </TopWrapper>
      <WorkWrapper ref={scrollRef} onScroll={(e) => scrollDirection(e)}>
        {works.map((work, index) => {
          return (
            <WorkImage
              key={index}
              index={index}
              work={work}
              worksLength={works.length}
              imgRefs={imgRefs}
              setImgRefs={setImgRefs}
            />
          );
        })}
      </WorkWrapper>
      <FooterWrapper>
        <NavWrapper>
          <NavLink to='/work'>{t('Work')}</NavLink>
          {', '}
          <NavLink to='/studio'>{t('Studio')}</NavLink>
          {', '}
          <NavLink to='/info'>Info</NavLink>
          {', '}
          <a href={"https://www.instagram.com/" + t("Instagram").replace('@', '')} target='_blank'>
            Instagram
          </a>
        </NavWrapper>
        <LanguageChange />
      </FooterWrapper>
    </HomeWrapper>
  );
};
