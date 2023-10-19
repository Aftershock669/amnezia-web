import { useTranslation } from 'react-i18next';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import ContactsCard from '@src/components/ContactsCard/ContactsCard';
import DocsHeader from '@src/components/DocsHeader/DocsHeader';
import SeoUpdater from '@src/components/SeoUpdater/SeoUpdater';
import Faq from '@src/components/Faq/Faq';
import styles from './FaqPage.module.scss';

const FaqPage = () => {
  usePageDecoration('dark');
  const { t } = useTranslation(['translation', 'support-page']);

  return (
    <div className={styles.root}>
      <SeoUpdater title={t('faqPage.metaTitle')} metaDesc={t('faqPage.metaContent')} />
      <DocsHeader
        breadcrumbs={[
          { title: t('navigation.support', { ns: 'translation' }), href: '../support' },
        ]}
        text={t('faq.header', { ns: 'support-page' })}
        variant="secondary"
      />
      <div className={styles.faqWrapper}>
        <Faq />
        {/*  <FaqMd /> */}
      </div>

      <div className={styles.contactsCardWrapper}>
        <ContactsCard />
      </div>
    </div>
  );
};

export default FaqPage;
