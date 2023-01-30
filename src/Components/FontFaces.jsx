import { css } from 'styled-components';
import BaseGroteskRegular from '../assets/fonts/BaseGrotesk/BaseGrotesk-Regular.woff2';
import BaseGroteskLight from '../assets/fonts/BaseGrotesk/BaseGrotesk-Light.woff2';
import BaseGroteskBold from '../assets/fonts/BaseGrotesk/BaseGrotesk-Bold.woff2';
import BaseGroteskMedium from '../assets/fonts/BaseGrotesk/BaseGrotesk-Medium.woff2';

import SuisseWorksWoff2 from '../assets/fonts/SuisseWorks/SuisseWorks-Regular-WebS.woff2';
import SuisseWorksWoff from '../assets/fonts/SuisseWorks/SuisseWorks-Regular-WebS.woff';

export const BaseGrotesk = css`
  @font-face {
    font-family: 'Base Grotesk';
    font-weight: 400;
    src: url(${BaseGroteskRegular}) format('woff2');
  }

  @font-face {
    font-family: 'Base Grotesk';
    font-weight: 300;
    src: url(${BaseGroteskLight}) format('woff2');
  }

  @font-face {
    font-family: 'Base Grotesk';
    font-weight: 500;
    src: url(${BaseGroteskMedium}) format('woff2');
  }

  @font-face {
    font-family: 'Base Grotesk';
    font-weight: 700;
    src: url(${BaseGroteskBold}) format('woff2');
  }
`;

export const SuisseWorks = css`
  @font-face {
    font-family: 'Suisse Works';
    font-weight: 500;
    src: url(${SuisseWorksWoff2}) format('woff2'),
      url(${SuisseWorksWoff}) format('woff');
  }
`;
