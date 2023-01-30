import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';

const SlideUpAnimation = keyframes`
  from{
   transform: translateY(100vw);
  }

  to{
    transform: translateY(0);
  }
`;

const WorkAboutText = styled.p`
  font-size: 1.25vw;
  font-size: 2.5rem;
`;

const WorkDetailInfoList = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-gap: 0.5rem;
  margin-top: 5rem;
  font-family: Base Grotesk, sans-serif;
`;

const WorkDetailInfoLabel = styled.p`
  grid-column: 1;
  font-size: 0.8vw;
  font-size: 1.6rem;
`;

const WorkDetailInfoText = styled.p`
  grid-column: 2;
  font-size: 0.8vw;
  font-size: 1.6rem;
`;

const WorkTextWrapper = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100%;
  max-height: 90vh;
  overflow-y: scroll;
  z-index: 200;
  background: white;
  padding: 0 2rem;
  display: ${(props) => (props.show ? 'box' : 'none')};
  animation: ${SlideUpAnimation} 0.5s ease-out;
`;

export const WorkTextInfo = ({ work, showText }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  return (
    <WorkTextWrapper show={showText}>
      <WorkAboutText>{work[lang]}</WorkAboutText>
      <WorkDetailInfoList>
        <WorkDetailInfoLabel>{t('Year')}</WorkDetailInfoLabel>
        <WorkDetailInfoText>{work.acf.year}</WorkDetailInfoText>
        <WorkDetailInfoLabel>{t('Client')}</WorkDetailInfoLabel>
        <WorkDetailInfoText>{work.acf.client}</WorkDetailInfoText>
        <WorkDetailInfoLabel>{t('Location')}</WorkDetailInfoLabel>
        <WorkDetailInfoText>{work.acf.location}</WorkDetailInfoText>
        <WorkDetailInfoLabel>{t('Size')}</WorkDetailInfoLabel>
        <WorkDetailInfoText>{work.acf.size}</WorkDetailInfoText>
        <WorkDetailInfoLabel>{t('Status')}</WorkDetailInfoLabel>
        <WorkDetailInfoText>{t(work.acf.status)}</WorkDetailInfoText>
        <WorkDetailInfoLabel>{t('Photography')}</WorkDetailInfoLabel>
        <WorkDetailInfoText>{work.acf.photography}</WorkDetailInfoText>
      </WorkDetailInfoList>
    </WorkTextWrapper>
  );
};
