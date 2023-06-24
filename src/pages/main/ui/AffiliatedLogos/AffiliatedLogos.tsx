import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './AffiliatedLogos.module.scss';
import { ReactComponent as WiredLogo } from './assets/wired.svg';
import { ReactComponent as TechRadarLogo } from './assets/tradar.svg';
import { ReactComponent as TheInsiderLogo } from './assets/insider.svg';
import { ReactComponent as MeduzaLogo } from './assets/meduza.svg';
import { ReactComponent as RoscomLogo } from './assets/roscom.svg';

const AffiliatedLogos = () => {
  const { t, i18n } = useTranslation('main-page');
  return (
    <div className={classNames(styles.root)}>
      <div className={styles.text}>{t('affiliatedLinks.theyWriteAboutAmneziaVPN')}</div>
      <div className={styles.logoContainerWrapper}>
        <div className={styles.logoContainer}>
          <Link className={styles.logoLink} to="https://www.wired.com/" reloadDocument>
            <WiredLogo />
          </Link>
          <Link className={styles.logoLink} to="https://www.techradar.com/" reloadDocument>
            <TechRadarLogo />
          </Link>
          {i18n.language === 'ru' ? (
            <>
              <Link className={styles.logoLink} to="https://theins.ru/" reloadDocument>
                <TheInsiderLogo />
              </Link>
              <Link className={styles.logoLink} to="https://meduza.io/" reloadDocument>
                <MeduzaLogo />
              </Link>
              <Link className={styles.logoLink} to="https://roskomsvoboda.org/" reloadDocument>
                <RoscomLogo />
              </Link>
            </>
          ) : undefined}
        </div>
      </div>
    </div>
  );
};

export default AffiliatedLogos;
