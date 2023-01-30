import { Route, Routes, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { Home } from './Views/Desktop/Home';
import { StudioClients } from './Views/Desktop/Studio/Clients';
import { StudioInfo } from './Views/Desktop/Studio/Info';
import { StudioProfile } from './Views/Desktop/Studio/Profile';
import { WorkDetail } from './Views/Desktop/Work/WorkDetail';
import { WorkIndex } from './Views/Desktop/Work/WorkIndex';

import { MobileScreen as MainScreen } from './Views/Mobile/Screen';
import { Home as HomeMobile } from './Views/Mobile/Home';
import { Work as WorkMobile } from './Views/Mobile/Work';
import { Studio as StudioMobile } from './Views/Mobile/Studio';
import { WorkDetail as WorkDetailMobile } from './Views/Mobile/Work/WorkDetail';
import { InfoContact } from './Views/Mobile/Info/InfoContact';
import { CirclePointer } from './Components/CirlePointer';
import { WorkPointer } from './Components/WorkPointer';
import { WorkOverview } from './Views/Desktop/Work/WorkOverview';

const QuerryDiv = styled.div`
  width: 100vw;
  height: 100vh;

  @media (min-width: 860px) {
    .mobile {
      display: none;
    }
  }

  @media (max-width: 860px) {
    .desktop {
      display: none;
    }
    .mobile {
      display: box;
    }
  }
`;

const DesktopDiv = styled.div`
  width: 100vw;
  height: 100vh;
`;

const MobileDiv = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const App = () => {
  const location = useLocation();
  return (
    <QuerryDiv>
      <DesktopDiv className='desktop'>
        {location.pathname.includes('/work/') ? (
          <WorkPointer />
        ) : (
          <CirclePointer />
        )}
        <Routes>
          <Route path='/work/:workTitle' element={<WorkDetail />} />
          <Route path='/studio' element={<StudioProfile />} />
          <Route path='/clients' element={<StudioClients />} />
          <Route path='/info' element={<StudioInfo />} />
          <Route path='/work' element={<WorkIndex />} />
          <Route path='/overview' element={<WorkOverview />} />
          <Route path='/' element={<Home />} />
        </Routes>
      </DesktopDiv>
      <MobileDiv className='mobile'>
        <Routes>
          <Route path='/work/:workTitle' element={<WorkDetailMobile />} />
          <Route path='/studio' element={<StudioMobile />} />
          <Route path='/info' element={<InfoContact />} />
          <Route path='/work' element={<WorkMobile />} />
          <Route path='/home' element={<HomeMobile />} />
          <Route path='/' element={<MainScreen />} />
        </Routes>
      </MobileDiv>
    </QuerryDiv>
  );
};
