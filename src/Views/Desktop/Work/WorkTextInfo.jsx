import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import styled, { keyframes } from 'styled-components';
import i18n from '../../../i18n';

const SlideUpAnimation = keyframes`
  from{
   transform: translateY(50vw);
  }

  to{
    transform: translateY(0);
  }
`;

const WorkAboutText = styled.p`
  font-size: 1.4vw;
  font-size: 2.8rem;
  width: 50%;
  margin: 0 auto;
`;

const WorkDetailInfoList = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  font-family: Base Grotesk, sans-serif;
  font-size: 1.6vw;
  font-size: 1.8rem;
  width: 50%;
  margin: 0 auto;
  margin-top: 5rem;
`;

const WorkDetailInfoLabel = styled.p`
  grid-column: 1;
`;

const WorkDetailInfoText = styled.p`
  grid-column: 2;
`;

const WorkTextWrapper = styled.div`
  grid-column: 1;
  grid-row: 1;
  display: flex;
  flex-flow: column;
  justify-content: center;
  height: 100%;
  width: 100%;
  margin: auto;
  z-index: 300;
  background: white;

  display: ${(props) => (props.show ? 'box' : 'none')};
  animation: ${SlideUpAnimation} 0.5s ease-out;
`;

const Link = styled.a`
  text-decoration: none;
  font-size: 0.8vw;
  font-size: 1.6rem;
  margin: 0;

  :hover {
    text-decoration: underline;
  }
`;

export const WorkTextInfo = ({ work, showText }) => {
  const { t } = useTranslation();
  const lang = i18next.language;
  return (
    <WorkTextWrapper show={showText}>
      <WorkAboutText>
        {lang == 'en' ? work.acf.about_en : work.acf.about_nl}
      </WorkAboutText>
      <WorkDetailInfoList>
        <WorkDetailInfoLabel>{t('Year')}</WorkDetailInfoLabel>
        <WorkDetailInfoText>{work.acf.year}</WorkDetailInfoText>
        <WorkDetailInfoLabel>{t('Client')}</WorkDetailInfoLabel>
        <Link href={work.acf.client_url} target="_blank"><WorkDetailInfoText>{work.acf.client}</WorkDetailInfoText></Link>
        <WorkDetailInfoLabel>{t('Location')}</WorkDetailInfoLabel>
        <WorkDetailInfoText>{work.acf.location}</WorkDetailInfoText>
        <WorkDetailInfoLabel>{t('Size')}</WorkDetailInfoLabel>
        <WorkDetailInfoText>{work.acf.size}</WorkDetailInfoText>
        <WorkDetailInfoLabel>{t('Status')}</WorkDetailInfoLabel>
        <WorkDetailInfoText>{t(work.acf.status)}</WorkDetailInfoText>
        <WorkDetailInfoLabel>{t('Photography')}</WorkDetailInfoLabel>
        <Link href={work.acf.photographer_url_} target="_blank"><WorkDetailInfoText>{work.acf.photography}</WorkDetailInfoText></Link>
      </WorkDetailInfoList>
    </WorkTextWrapper>
  );
};
