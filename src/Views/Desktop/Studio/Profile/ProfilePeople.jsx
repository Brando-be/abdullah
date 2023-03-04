import styled from 'styled-components';

import people1 from '../../../../assets/img/people/people1.jpg';
import people2 from '../../../../assets/img/people/people2.jpg';
import people3 from '../../../../assets/img/people/people3.jpg';

const PeopleWrapper = styled.div`
  grid-column: 2/5;
  grid-row: 1;
  height: 60vh;
  padding: 2rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2rem;
`;

const WorkerWrapper = styled.div`
  grid-row: 1;
  height: 100%;
  display: flex;
  flex-flow: column;
`;

const WorkerImage = styled.img`
  width: 100%;
  max-width: 40rem;
`;

const WorkerInfoText = styled.a`
  font-family: Base Grotesk, sans-serif;
  font-size: 1.3vw;
  font-size: 1.6rem;
  text-decoration: none;
  color: black;
`;

export const ProfilePeople = () => {
  return (
    <PeopleWrapper>
      <WorkerWrapper>
        <WorkerImage src={people1} />
        <WorkerInfoText>Architect, Founder Partner</WorkerInfoText>
        <WorkerInfoText href='tel:+32 492 354 099'>
          +32 492 354 099
        </WorkerInfoText>
        <WorkerInfoText href='mailto:bv@bjornverlinde.studio'>
          bv@bjornverlinde.studio
        </WorkerInfoText>
      </WorkerWrapper>
      <WorkerWrapper>
        <WorkerImage src={people2} />
        <WorkerInfoText>Designer</WorkerInfoText>
        <WorkerInfoText href='tel:+32 492 354 099'>
          +32 492 354 099
        </WorkerInfoText>
        <WorkerInfoText href='mailto:bb@bjornverlinde.studio'>
          bb@bjornverlinde.studio
        </WorkerInfoText>
      </WorkerWrapper>
      <WorkerWrapper>
        <WorkerImage src={people3} />
        <WorkerInfoText>Founding Partner</WorkerInfoText>
        <WorkerInfoText href='tel:+32 492 354 099'>
          +32 492 354 099
        </WorkerInfoText>
        <WorkerInfoText href='mailto:sb@bjornverlinde.studio'>
          sb@bjornverlinde.studio
        </WorkerInfoText>
      </WorkerWrapper>
    </PeopleWrapper>
  );
};
