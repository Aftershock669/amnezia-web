import DwnHeader from '@src/pages/downloads/ui/DwnHeader/DwnHeader';
import DwnCard from '@src/pages/downloads/ui/DwnCard/DwnCard';
import DwnInfoCard from '@src/pages/downloads/ui/DwnInfoCard/DwnInfoCard';
import usePageDecoration from '@src/shared/hooks/usePageDecoration/usePageDecoration';
import styles from './DownloadsPage.module.scss';

const DownloadsPage = () => {
  usePageDecoration('darker');
  return (
    <div className={styles.pageContainer}>
      <DwnHeader />
      <DwnCard />
      <DwnInfoCard />
    </div>
  );
};

export default DownloadsPage;
