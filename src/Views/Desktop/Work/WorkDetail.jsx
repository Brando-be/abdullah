import i18next from 'i18next';
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { LanguageChange } from '../../../Components/LanguageChange';
import { works } from '../../../Constants/Works';
import { BjornTextTop, StyledLink, fadeDelayWork } from '../../../style';
import { searchByTitle, searchIndexByTitle } from '../../../utils/findWorks';
import useMousePos from '../../../utils/useMousePos';
import { WorkImage } from './WorkImage';
import { WorkTextInfo } from './WorkTextInfo';

const DetailWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
  max-height: 100vh;
  grid-gap: 2rem;
`;

const InfoWrapper = styled.div`
  grid-column: 1 / 3;
  grid-row: 1;
  margin: 2rem;
  z-index: 5;
`;

const SmallText = styled.p`
  font-size: 0.8vw;
  font-size: 1.6rem;
  margin: 0.5rem 0 0 0;
`;

const SmallTextBottom = styled(SmallText)`
  grid-column: 2;
  grid-row: 1;
  z-index: 500;
  align-self: flex-end;
  margin-bottom: 2rem;
  font-family: Base Grotesk, sans-serif;
  font-size: 1vw;
  font-size: 2rem;
  ${fadeDelayWork}
`;

const BackToWorkLink = styled(StyledLink)`
  grid-column: 3;
  font-size: 1vw;
  font-size: 2rem;
  grid-row: 1;
  align-self: flex-end;
  justify-self: end;
  margin-bottom: 2rem;
  z-index: 500;
  font-family: Base Grotesk, sans-serif;
`;

const WorkImagesWrapper = styled.div`
  z-index: 100;
  width: 70%;
  display: flex;
  overflow-x: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  grid-column: 1;
  grid-row: 1;
  align-self: center;
  justify-self: center;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const Underline = styled.span`
  text-decoration: underline;
`;

const TextImgButton = styled.button`
  font-size: 1vw;
  font-size: 2rem;
  margin: 0;
  background: none;
  border: none;
  padding: 0;
  :hover {
    text-decoration: underline;
  }
`;

const WorkWrapper = styled.div`
  grid-column: 1/5;
  grid-row: 1;
  align-self: center;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  margin: auto;
  ${fadeDelayWork}
`;

export const WorkDetail = () => {
  const [showImages, setShowImages] = useState(true);
  let navigate = useNavigate();
  const [imgRefs, setImgRefs] = useState([]);
  const [imgRefIndex, setImgRefIndex] = useState(1);
  const [imgRestart, setImgRestart] = useState(false);
  const { workTitle } = useParams();
  const work = searchByTitle(workTitle);
  const scrollRef = useRef();

  useEffect(() => {
    if (imgRefIndex >= imgRefs) {
      return;
    }
    const scroll = setInterval(
      () => imgRefs[imgRefIndex].current.scrollIntoView(),
      10000
    );

    return () => clearInterval(scroll);
  }, []);

  const { x, y } = useMousePos();

  const scrollDirectionDiv = (e) => {
    const devideBy = scrollRef.current.scrollWidth / work.acf.images.length;
    const scrollDevided = e.target.scrollLeft / devideBy + 1;
    if (Math.round(scrollDevided) < 1) {
      setImgRefIndex(1);
    } else if (imgRefIndex <= work.acf.images.length) {
      setImgRefIndex(Math.round(scrollDevided));
    }
  };
  const lang = i18next.language;

  // const showNewImage = (e) => {
  //   console.log(e.target.innerHTML);
  //   if (
  //     x < window.innerWidth / 3 &&
  //     y > window.innerHeight / 6 &&
  //     y < (window.innerHeight / 6) * 5 &&
  //     imgRefIndex > 1 &&
  //     showImages
  //   ) {
  //     const index = imgRefIndex - 2;
  //     imgRefs[index].current.scrollIntoView();
  //   } else if (
  //     x > (window.innerWidth / 3) * 2 &&
  //     y > window.innerHeight / 6 &&
  //     y < (window.innerHeight / 6) * 5 &&
  //     imgRefIndex < work.images.length &&
  //     showImages
  //   ) {
  //     const index = imgRefIndex;
  //     imgRefs[index].current.scrollIntoView();
  //   }
  // };

  const { t } = useTranslation();

  const handleKeySwipe = (e) => {
    if (e.key === '37') {
      const index = imgRefIndex - 1;
      imgRefs[index].current.scrollIntoView();
    } else if (e.key === '39') {
      const index = imgRefIndex + 1;
      imgRefs[index].current.scrollIntoView();
    }
  };

  const newProject = (e) => {
    if (e.target.innerHTML === 'Tekst' || e.target.innerHTML === 'Text') {
      setShowImages(false);
    } else {
      setShowImages(true);
    }
    const workIndex = searchIndexByTitle(workTitle);
    let index = workIndex;
    console.log(workIndex);
    if (
      y < window.innerHeight / 8 &&
      x > (window.innerWidth / 5) * 2 &&
      x < (window.innerWidth / 5) * 3
    ) {
      if (workIndex === 0) {
        index = works.length - 1;
      } else if (index === works.length) {
        index = 1;
      } else {
        index = workIndex - 1;
      }
      navigate(`/work/${works[index].acf.title}`);
    } else if (
      y > (window.innerHeight / 8) * 7 &&
      x > (window.innerWidth / 5) * 2 &&
      x < (window.innerWidth / 5) * 3
    ) {
      if (workIndex === 0) {
        index = workIndex + 1;
      } else if (index === works.length - 1) {
        index = 0;
      } else {
        index = workIndex + 1;
      }
      navigate(`/work/${works[index].acf.title}`);
    }
  };
  return (
    <DetailWrapper
      onClick={(e) => newProject(e)}
      onkeydown={(e) => handleKeySwipe(e)}>
      <InfoWrapper>
        <BjornTextTop to='/'>
          {t('For')} {work.acf.client}
        </BjornTextTop>
        <SmallText>
          {work.acf.title} ({t(work.acf.category)}), {work.acf.year}
        </SmallText>
      </InfoWrapper>
      <WorkWrapper>
        <WorkImagesWrapper
          ref={scrollRef}
          onScroll={(e) => scrollDirectionDiv(e)}>
          {work.acf.images.map((img, index) => {
            const imageName = img.image;
            return (
              <WorkImage
                index={index}
                setImgRefs={setImgRefs}
                imgRefs={imgRefs}
                imgName={imageName}
                imgLength={work.acf.images.length}
                setImgRestart={setImgRestart}
                imgRestart={imgRestart}
              />
            );
          })}
        </WorkImagesWrapper>
        <WorkTextInfo showText={!showImages} work={work} />
      </WorkWrapper>
      <SmallTextBottom>
        {showImages ? (
          <TextImgButton onClick={() => setShowImages(false)}>
            {t('Text')}
          </TextImgButton>
        ) : (
          <Underline>{t('Text')}</Underline>
        )}{' '}
        /{' '}
        {showImages ? (
          <Underline>
            {t('Images')} ({imgRefIndex}/{work.acf.images.length})
          </Underline>
        ) : (
          <TextImgButton onClick={() => setShowImages(true)}>
            {t('Images')}
          </TextImgButton>
        )}
      </SmallTextBottom>
      <BackToWorkLink to={'/'}>{t('BackHome')}</BackToWorkLink>
      <LanguageChange />
    </DetailWrapper>
  );
};
