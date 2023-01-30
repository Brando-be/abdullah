import { profileViews } from './profileViews';
import { ProfileAbout } from './ProfileAbout';
import { ProfileAproach } from './ProfileApproach';
import { ProfilePeople } from './ProfilePeople';

export const ProfileViewSwitch = ({ view }) => {
  switch (view) {
    case profileViews.APPROACH:
      return <ProfileAproach />;
    case profileViews.PEOPLE:
      return <ProfilePeople />;
    case profileViews.JOBS:
      return <ProfileAproach />;

    default:
      return <ProfileAbout />;
  }
};
