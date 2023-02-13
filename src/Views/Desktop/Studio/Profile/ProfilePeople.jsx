import styled from 'styled-components';
import { resources } from '../../../../i18n/resources';

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
  const Peopels = resources.en.translation.Peoples
  return (
    <PeopleWrapper>
      {Peopels.map((people, index) => {
        return(
          <WorkerWrapper>
            <WorkerImage src={people.image.url} />
            <WorkerInfoText>{people.designation}</WorkerInfoText>
            <WorkerInfoText href={'tel:+'+ people.mobile_number}>
              {"+"+people.mobile_number}
            </WorkerInfoText>
            <WorkerInfoText href={"mailto:" + people.email}>
              {people.email}
            </WorkerInfoText>
          </WorkerWrapper>
        )
      })}
    </PeopleWrapper>
  );
};
