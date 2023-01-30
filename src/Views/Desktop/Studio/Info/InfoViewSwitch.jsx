import { InfoContact } from './InfoContact';
import { InfoImprint } from './InfoImprint';
import { infoViews } from './infoViews';

export const InfoViewSwitch = ({ view }) => {
  switch (view) {
    case infoViews.IMPRINT:
      return <InfoImprint />;
    default:
      return <InfoContact />;
  }
};
