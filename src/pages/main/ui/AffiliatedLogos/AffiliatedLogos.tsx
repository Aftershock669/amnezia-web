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
        <Link className={styles.logoLink} to="https://www.wired.com/" reloadDocument>
          <img src="/aff_logos/wired.svg" alt="wired logo" />
        </Link>
        <Link className={styles.logoLink} to="https://www.techradar.com/" reloadDocument>
          <img src="/aff_logos/tradar.svg" alt="tradar logo" />
        </Link>
        <Link className={styles.logoLink} to="https://roskomsvoboda.org/" reloadDocument>
          <img src="/aff_logos/roscom.svg" alt="roscom logo" />
        </Link>
        <Link className={styles.logoLink} to="https://theins.ru/" reloadDocument>
          <img src="/aff_logos/insider.svg" alt="insider logo" />
        </Link>
        <Link className={styles.logoLink} to="https://meduza.io/" reloadDocument>
          <img src="/aff_logos/meduza.svg" alt="meduza logo" />
        </Link>
      </div>
    </div>
  );
};

export default AffiliatedLogos;
