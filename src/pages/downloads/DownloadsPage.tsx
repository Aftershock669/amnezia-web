import DwnHeader from '@src/pages/downloads/ui/DwnHeader/DwnHeader';
import DwnCard from '@src/pages/downloads/ui/DwnCard/DwnCard';
import DwnInfoCard from '@src/pages/downloads/ui/DwnInfoCard/DwnInfoCard';
import styles from './DownloadsPage.module.scss';

const DownloadsPage = () => {
  return (
    <div className={styles.pageContainer}>
      <DwnHeader />
      <DwnCard />
      <DwnInfoCard />
    </div>
  );
};

export default DownloadsPage;
