//import { siteData } from '../Constants/SiteData';

export const fetchSiteData = async () => {
    const response = await fetch(
      `${
        import.meta.env.VITE_WP_URL
      }/wp-json/acf/v3/pages/10`,
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
    const formattedWorks = data;
    //siteData.push(data);
    if (formattedWorks) {
      sessionStorage.setItem(
        'bjorn-verlinde_sitedata',
        JSON.stringify(formattedWorks)
      );
      return data;
    }
};
