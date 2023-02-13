import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { resources } from '../../../../i18n/resources';

const InfoImprintWrapper = styled.div`
  grid-column: 2/4;
  grid-row: 1;
  margin-top: 2rem;
`;

const InfoImprintText = styled.p`
  font-size: 1.25vw;
  font-size: 2.5rem;
  margin-bottom: 4rem;
`;

const ImprintTitle = styled.span`
  text-transform: uppercase;
`;

const CreditsList = styled.ul`
  font-family: Base Grotesk, sans-serif;
  font-size: 1vw;
  font-size: 2rem;
  padding: 0;
  list-style: none;
`;

const CreditListItem = styled.li``;

const CreditItemTitle = styled.span`
  font-family: Suisse Works, serif;
  font-size: 1.5vw;
  font-size: 3rem;
`;

export const InfoImprint = () => {
  const { t } = useTranslation();
  const Brands = resources.en.translation.Brands
  console.log(Brands,"Brands");
  return (
    <InfoImprintWrapper>
      <InfoImprintText>
        Responsible for the content of this website: <br />
        {t('Imprint')}
      </InfoImprintText>
      <CreditsList>
        <ImprintTitle>CREDITS</ImprintTitle> <br />
        {Brands.map((brand, index) => {
            return(
              <CreditListItem key={index}>
                <CreditItemTitle key={index}>{brand.brand},</CreditItemTitle> {brand.work_categories}
              </CreditListItem>
            )
        })}
      </CreditsList>
    </InfoImprintWrapper>
  );
};
