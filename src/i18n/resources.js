import { fetchSiteData } from '../utils/getSiteData';
const siteData = await fetchSiteData();
export const resources = {
  en: {
    translation: {
      Work: 'Work',
      Studio: 'The Studio',

      BackToWork: 'Back to Work',

      all: 'All',
      retail: 'Retail',
      hospitality: 'Hospitality',
      'Public space': 'Public space',
      private: 'Private',
      object: 'Object',

      FilterBy: 'Filter by type',

      Overview: 'Overview',
      BackHome: 'Back Home',

      Year: 'Year',
      Client: 'Client',
      Location: 'Location',
      Size: 'Size',
      Status: 'Status',
      'In Progress': 'In Progress',
      Completed: 'Completed',
      Photography: 'Photography',

      For: 'For',
      Text: 'Text',
      Images: 'Images',

      //mobile detail text
      ReadText: 'Read text',
      CloseText: 'Close text',

      Selected: 'Selected',

      Profile: 'Profile',
      Clients: 'Clients',

      About: 'About',
      Approach: 'Approach',
      People: 'People',
      //about
      Established: siteData.acf.about_detail,
      Designer:
        siteData.acf.en_about_detail_designer,
      AboutMore:
        siteData.acf.about_more,
      ReadMore: 'Read more',
      ReadLess: 'Read less',

      //Approach
      AboutApproch: siteData.acf.en_description,
      Briefing: siteData.acf.en_briefing,
      BriefingText: siteData.acf.en_briefing_description,
      Concept: siteData.acf.en_concept,
      ConceptText: siteData.acf.en_concept_description,
      Realisation: siteData.acf.en_realisation,
      RealisationText: siteData.acf.en_realisation_description,

      //Clients
      AboutClient: siteData.acf.about_client,
      SelectedClients: siteData.acf.extra_about_client,

      //Info
      ViewOnMap: 'View on Google Maps',
      GeneralInquiries: 'General inquiries',
      JobsInternships: 'Jobs & Internships',
      OfficeHours: 'Office Hours',
      MondayFriday: 'Monday — Friday',
      BelgiumCurrentTime: 'Current Local Time',
      Adress: siteData.acf.adress,
      Adress2: siteData.acf.adress_2,
      Phone: siteData.acf.mobile_number,
      MapUrl: siteData.acf.map_url,
      GeneralEmail: siteData.acf.general_inquiries_email,
      JobEmail: siteData.acf.jobs_and_internships_email,
      Instagram: siteData.acf.instagram,
      OfficeHrs: siteData.acf.office_hours,

    },
  },
  nl: {
    translation: {
      Work: 'Werk',
      Studio: 'De Studio',

      BackToWork: 'Terug',

      all: 'Alles',
      retail: 'Retail',
      hospitality: 'Horeca',
      'Public space': 'Openbare ruimte',
      private: 'Residentieel',
      object: 'Object',

      //filter by
      FilterBy: 'Filter op type',

      Overview: 'Overzicht',
      BackHome: 'Terug',

      Year: 'Jaar',
      Client: 'Klant',
      Location: 'Locatie',
      Size: 'Oppervlakte',
      Status: 'Status',
      'In Progress': 'In uitvoering',
      Completed: 'Voltooid',
      Photography: 'Fotografie',

      For: 'Voor',
      Text: 'Tekst',
      Images: 'fotos',

      //mobile detail text
      ReadText: 'Lees tekst',
      CloseText: 'Verberg tekst',

      Selected: 'Selecteer',

      Profile: 'Profiel',
      Clients: 'Klanten',

      About: 'Over',
      Approach: 'Aanpak',
      People: 'Team',
      //about
      Established: siteData.acf.nl_about_detail,
      Designer:
        siteData.acf.nl_about_detail_designer,
      AboutMore:
        siteData.acf.nl_about_more,
      ReadMore: 'Lees meer',
      ReadLess: 'Lees minder',

      AboutMobile:
        'Opgericht in 2015, Studio Bjorn Verlinde is een multidisciplinaire ontwerppraktijk op en rond het gebied van interieur, ruimteontwerp en productontwikkeling. Terwijl zijn output gevarieerd is, wordt zijn werk verenigd door een verlangen om meeslepende en persoonlijke ontwerpen die verhalen vertellen zonder woorden te maken. Gevoed door een team',

      //Approach
      AboutApproch: siteData.acf.nl_description,
      Briefing: siteData.acf.nl_briefing,
      BriefingText: siteData.acf.nl_briefing_description,
      Concept: siteData.acf.nl_concept,
      ConceptText: siteData.acf.nl_concept_description,
      Realisation: siteData.acf.nl_realisation,
      RealisationText: siteData.acf.nl_realisation_description,

      //Clients
      AboutClient: siteData.acf.nl_about_client,
      SelectedClients: siteData.acf.nl_extra_about_client,

      //info
      ViewOnMap: 'Google Maps',
      GeneralInquiries: 'Algemene vragen',
      JobsInternships: 'Vacatures en stages',
      OfficeHours: 'Kantooruren',
      MondayFriday: 'Maandag — Vrijdag',
      BelgiumCurrentTime: 'Lokale Tijd',
      Adress: siteData.acf.adress,
      Adress2: siteData.acf.adress_2,
      Phone: siteData.acf.mobile_number,
      MapUrl: siteData.acf.map_url,
      GeneralEmail: siteData.acf.general_inquiries_email,
      JobEmail: siteData.acf.jobs_and_internships_email,
      Instagram: siteData.acf.instagram,
      OfficeHrs: siteData.acf.office_hours,
    },
  },
};
