import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const AproachWrapper = styled.div`
  grid-column: 2/4;
  grid-row: 1;
  margin-top: 2rem;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  height: 50%;
`;

const AproachText = styled.p`
  font-size: 2.8rem;
  font-size: 1.25vw;
  margin-bottom: 2rem;
`;

const AproachTitle = styled.span`
  font-size: 2.6rem;
  text-transform: uppercase;
  font-family: Base Grotesk, sans-serif;
`;

export const ProfileAproach = () => {
  const { t } = useTranslation();
  return (
    <AproachWrapper>
      <AproachText>
      {t('AboutApproch')}
      </AproachText>
      <AproachText>
        <AproachTitle>{t('Briefing')}</AproachTitle> <br />
        {t('BriefingText')}
      </AproachText>
      <AproachText>
        <AproachTitle>{t('Concept')}</AproachTitle> <br />
        {t('ConceptText')}
      </AproachText>
      <AproachText>
        <AproachTitle> {t('Realisation')} </AproachTitle>
        <br />
        {t('RealisationText')}
      </AproachText>
    </AproachWrapper>
  );
};
