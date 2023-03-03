import { useEffect } from 'react';
import { useState } from 'react';
import { InfoContact } from './InfoContact';
import { InfoImprint } from './InfoImprint';
import InfoPrivacy from './InfoPrivacy';
import { infoViews } from './infoViews';

export const InfoViewSwitch = ({ view }) => {
  const [isPrivacy, setIsPrivacy] = useState(false);

  useEffect(() => {
    if (infoViews.PRIVACY === view) setIsPrivacy(true);
    else setIsPrivacy(false);
  }, [view]);

  switch (view) {
    case infoViews.IMPRINT:
      return <InfoImprint isPrivacy={isPrivacy} />;
    case infoViews.PRIVACY:
      return <InfoPrivacy />;
    default:
      return <InfoContact />;
  }
};
