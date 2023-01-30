import styled from 'styled-components';

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
  return (
    <InfoImprintWrapper>
      <InfoImprintText>
        Responsible for the content of this website: <br /> Studio Bjorn
        Verlinde, Hugo Verriestlaan 5 B - 8800 Roeselare, (Belgium),+32 (0)499
        737 487 Ondernemingsnr. BE 0659 715 014, Arrondissement Kortrijk
      </InfoImprintText>
      <CreditsList>
        <ImprintTitle>CREDITS</ImprintTitle> <br />
        <CreditListItem>
          <CreditItemTitle>Brando,</CreditItemTitle> Design & development
        </CreditListItem>
        <CreditListItem>
          <CreditItemTitle>Typefaces,</CreditItemTitle> Suisse Works & Muoto{' '}
        </CreditListItem>
        <CreditListItem>
          <CreditItemTitle>
            Frederik Vercruysse, Nathan Van Haver, Lies Willaert,
          </CreditItemTitle>{' '}
          Photographers
        </CreditListItem>
        <CreditListItem>
          <CreditItemTitle>Bliksem&Donder,</CreditItemTitle> Texts
        </CreditListItem>
      </CreditsList>
    </InfoImprintWrapper>
  );
};
