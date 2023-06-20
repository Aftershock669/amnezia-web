import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './AffiliatedLogos.module.scss';

const AffiliatedLogos = () => {
  const { t } = useTranslation('main-page');
  return (
    <div className={classNames(styles.root)}>
      <div className={styles.text}>Об Amnezia VPN пишут</div>
      <div className={styles.logoContainer}>
        <Link to="https://www.wired.com/" reloadDocument>
          <img src="/aff_logos/wired.svg" className={styles.logo} alt="wired logo" />
        </Link>
        <Link to="https://www.techradar.com/" reloadDocument>
          <img src="/aff_logos/tradar.svg" className={styles.logo} alt="tradar logo" />
        </Link>
        <Link to="https://roskomsvoboda.org/" reloadDocument>
          <img src="/aff_logos/roscom.svg" className={styles.logo} alt="roscom logo" />
        </Link>
        <Link to="https://theins.ru/" reloadDocument>
          <img src="/aff_logos/insider.svg" className={styles.logo} alt="insider logo" />
        </Link>
        <Link to="https://meduza.io/" reloadDocument>
          <img src="/aff_logos/meduza.svg" className={styles.logo} alt="meduza logo" />
        </Link>
      </div>
    </div>
  );
};

export default AffiliatedLogos;
