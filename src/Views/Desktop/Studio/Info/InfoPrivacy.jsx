import React from 'react';
import styled from 'styled-components';

const PrivacyWrapper = styled.div`
  grid-column: 2/4;
  grid-row: 1;
  margin-top: 2rem;
  overflow: scroll;
  margin-bottom: 60px;
`;

const PrivacyText = styled.p`
  font-size: 1.2vw;
  font-size: 2.6rem;
  margin-bottom: 2.5rem;
  font-weight: 500;
`;

const PrivacyTitle = styled.p`
  font-size: 1.35vw;
  padding: 0 0 8px 0;
  font-size: 1.7rem;
  text-transform: uppercase;
  font-family: Base Grotesk, sans-serif;
`;

const InfoPrivacy = () => {
  return (
    <PrivacyWrapper>
      <PrivacyTitle style={{ padding: '20px 0', display: 'block' }}>
        PRIVACY POLICY
      </PrivacyTitle>
      <PrivacyText>
        Decursum mendam inam auc rei is bonscia cus, Paliam. Patisusquo hocta,
        Cat rem rem ilis complicatam, et vercerf esciem sentem is, st gra vivis.
        Bonsultiur ia duciend ienatia nius aurium con nerente ingulic ientestris
        popubliciae public tiacientrae tam, nitiderum hostod ignon sente,
        quidet; effrei publictus, factus? inprae anum tem{' '}
      </PrivacyText>
      <PrivacyTitle>TITLE</PrivacyTitle>
      <PrivacyText>
        ina, quastre te nes audam ala condepe rfena, ute ac rectartem
        interfecurs noc viridem in dum. Obse dius; hocultus co is ium it nimis
        ium, caes erfecritia renimovesse es? Rudam eo peremer videssolusa L.
        Dam, senduc res horei sena, P. Ivis ca; nertest omantemuro vocultum
        huius, auc tu mus med facte que pata andam more.
      </PrivacyText>
    </PrivacyWrapper>
  );
};

export default InfoPrivacy;
