import { useTranslation } from 'react-i18next';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import { useEffect, useState } from 'react';
import Div100vh from 'react-div-100vh';
import styled from 'styled-components';
import NewsletterForm from '../../Desktop/Studio/Info/NewsletterForm';

const InfoContactText = styled.p`
  font-size: 2rem;
  padding-top: 2rem;
`;

const InfoContactTextDiv = styled.div`
  font-size: 2rem;
  padding-top: 2rem;
`;

const ContactTitle = styled.span`
  text-transform: uppercase;
  font-family: Base Grotesk, sans-serif;
  font-size: 1.2rem;
`;

const ViewOnMapLink = styled.a`
  display: block;
  padding-top: 20px;
  font-size: 2rem;
  color: black;
  text-decoration: underline dotted;
`;

export const InfoContact = ({ styles }) => {
  const { t } = useTranslation();
  const [time, setTime] = useState(
    new Date().toLocaleString('en-GB', {
      timeZone: 'Europe/Brussels',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })
  );

  const MAILCHIMP_URL =
    'https://studio.us10.list-manage.com/subscribe/post?u=ca105599d3f7f3c21814b1c6f&amp;id=5d0818837f&amp;f_id=007ec9e5f0';

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(
        new Date().toLocaleString('en-GB', {
          timeZone: 'Europe/Brussels',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      );
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const style = styles ? styles : {};
  return (
    <div style={{ ...style, margin: '0 -2rem' }}>
      <InfoContactText>
        {t('Adress')}
        <br />
        {t('Adress2')}
        <br />+{t('Phone')}
        <br />
        <ViewOnMapLink href={t('MapUrl')} target='_blank'>
          {t('ViewOnMap')}
        </ViewOnMapLink>
      </InfoContactText>
      <InfoContactText>
        <ContactTitle>{t('GeneralInquiries')}</ContactTitle>
        <br />
        <a href={'mailto:' + t('GeneralEmail')}>{t('GeneralEmail')}</a>
      </InfoContactText>
      <InfoContactText>
        <ContactTitle>{t('JobsInternships')}</ContactTitle>
        <br />
        <a href={'mailto:' + t('JobEmail')}>{t('JobEmail')}</a>
      </InfoContactText>
      <InfoContactText>
        <ContactTitle>Instagram</ContactTitle>
        <br />
        <a
          href={'https://www.instagram.com/' + t('Instagram').replace('@', '')}
          target='_blank'
        >
          {t('Instagram')}
        </a>
      </InfoContactText>
      <InfoContactText>
        <ContactTitle>{t('OfficeHours')}</ContactTitle>
        <br />
        {t('MondayFriday')}: {t('OfficeHrs')}
        <br />
        {t('BelgiumCurrentTime')}: {time}
      </InfoContactText>
      <InfoContactTextDiv>
        <ContactTitle>Get Our Updates</ContactTitle>
        <MailchimpSubscribe
          url={MAILCHIMP_URL}
          render={(props) => {
            const { subscribe, status, message } = props || {};
            return (
              <NewsletterForm
                status={status}
                message={message}
                subscribe={subscribe}
              />
            );
          }}
        />
      </InfoContactTextDiv>
    </div>
  );
};
