import DwnHeader from '@src/pages/downloads/ui/DwnHeader/DwnHeader';
import DwnCard from '@src/pages/downloads/ui/DwnCard/DwnCard';
import DwnInfoCard from '@src/pages/downloads/ui/DwnInfoCard/DwnInfoCard';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import styles from './DownloadsPage.module.scss';

const DownloadsPage = () => {
  usePageDecoration('darker');
  const { t } = useTranslation('downloads-page');
  return (
    <>
      <Helmet defer={false}>
        <title>{t('metaTitle')}</title>
        <meta name="description" content={t('metaContent')} />
      </Helmet>
      <div className={styles.pageContainer}>
        <DwnHeader />
        <DwnCard />
        <DwnInfoCard />
      </div>
    </>
  );
};

export default DownloadsPage;
