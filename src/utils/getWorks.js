import { works } from '../Constants/Works';
import { formatData } from './formatData';

export const fetchWorks = async () => {
    const response = await fetch(
      // `${
      //   import.meta.env.VITE_WP_URL
      // }/wp-json/acf/v3/works`,
      'https://bjornverlinde.studio/wp-json/acf/v3/works',
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    if (!response.ok) {
      console.error(response.statusText);
      throw new Error(`An error occured please try again`);
    }

    const data = await response.json();
    const formattedWorks = await formatData(data);
    if (formattedWorks) {
      sessionStorage.setItem(
        'bjorn-verlinde_work',
        JSON.stringify(formattedWorks)
      );
      return true;
    }
};
