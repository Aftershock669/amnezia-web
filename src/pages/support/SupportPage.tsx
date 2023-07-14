import SupportHeaderText from '@src/pages/support/ui/SupportHeaderText/SupportHeaderText';
import SupportCards from '@src/pages/support/ui/SupportCards/SupportCards';
import ContactsCard from '@src/components/ContactsCard/ContactsCard';
import Faq from '@src/pages/support/ui/Faq/Faq';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import styles from './SupportPage.module.scss';

const SupportPage = () => {
  usePageDecoration('dark');
  const { t } = useTranslation('support-page');
  return (
    <>
      <Helmet defer={false}>
        <title>{t('metaTitle')}</title>
        <meta name="description" content={t('metaContent')} />
      </Helmet>
      <SupportHeaderText />
      <SupportCards />
      <Faq />
      <div className={styles.contactsCardWrapper}>
        <ContactsCard />
      </div>
    </>
  );
};

export default SupportPage;
