import classNames from 'classnames';
import TextLink from '@src/shared/ui/TextLink/TextLink';
import { useTranslation } from 'react-i18next';
import styles from './BadgesContainer.module.scss';

const BadgesContainer = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className={styles.root}>
      <div className={styles.label}>СКАЧАТЬ AMNEZIA VPN</div>
      <div className={styles.badgesWrapper}>
        <a
          target="_blank"
          href="https://play.google.com/store/apps/details?id=org.amnezia.vpn"
          rel="noreferrer"
        >
          <img src={`/img/${i18n.language}/dwn-play.png`} alt="google play badge" />
        </a>
        <a
          target="_blank"
          href="https://apps.apple.com/us/app/amneziavpn/id1600529900"
          rel="noreferrer"
        >
          <img src={`/img/${i18n.language}/dwn-app-store.png`} alt="app store badge" />
        </a>
        <div className={styles.linkWrapper}>
          <TextLink
            text="Все варианты загрузки"
            to="/downloads"
            variant="light"
            className={styles.link}
          />
        </div>
      </div>
    </div>
  );
};

export default BadgesContainer;
