import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';
import footerLogo from './assets/footer-logo.png';

export default function Footer() {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.footer}>
      <div className={styles.logoSection}>
        <img className={styles.logo} src={footerLogo} alt="footer logo" />
      </div>
      <div className={styles.mainSection}>
        <div className={styles.downloadLabel}>СКАЧАТЬ AMNEZIA VPN</div>
        <div className={styles.badgesContainer}>
          <img src={`/img/${i18n.language}/dwn-play.png`} />
          <img src={`/img/${i18n.language}/dwn-app-store.png`} />
        </div>
      </div>
    </div>
  );
}
