import SupportHeaderText from '@src/pages/support/ui/SupportHeaderText/SupportHeaderText';
import SupportCards from '@src/pages/support/ui/SupportCards/SupportCards';
import ContactsCard from '@src/components/ContactsCard/ContactsCard';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import { useTranslation } from 'react-i18next';
import SeoUpdater from '@src/components/SeoUpdater/SeoUpdater';
import FaqOld from '@src/pages/support/ui/FaqOld/FaqOld';
import styles from './SupportPage.module.scss';

const SupportPage = () => {
  usePageDecoration('dark');
  const { t } = useTranslation('support-page');
  return (
    <div>
      <SeoUpdater title={t('metaTitle')} metaDesc={t('metaContent')} />
      <SupportHeaderText />
      <SupportCards />
      {/*<FaqOld />*/}
      {/* <Faq /> */}
      <div className={styles.contactsCardWrapper}>
        <ContactsCard />
      </div>
    </div>
  );
};

export default SupportPage;
