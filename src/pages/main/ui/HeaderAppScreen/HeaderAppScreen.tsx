import classNames from 'classnames';
import { useMediaQuery } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';
import styles from './HeaderAppScreen.module.scss';

const HeaderAppScreen = () => {
  const { t, i18n } = useTranslation();
  const isDesktop = useMediaQuery('(min-width: 1024px)');
  return (
    <div className={styles.root}>
      {isDesktop ? (
        <div className={styles.outer}>
          <div className={classNames(styles.ripple, styles.three)} />
          <div className={classNames(styles.ripple, styles.two)} />
          <div className={classNames(styles.ripple, styles.one)} />
        </div>
      ) : undefined}
      <div className={styles.screenWrapper}>
        <img
          src={`/img/${i18n.language}/app-screen.png`}
          className={styles.screenImg}
          alt="Amnezia logo"
        />
        <div className={styles.glow} />
      </div>
      {/* <img src="/app-bg.jpg" className={styles.bgLightImg} alt="Amnezia logo" /> */}
      {/* <div className={styles.logoWrapper}> */}
      {/* <img src="/logo-bg.svg" className={styles.bgLogoImg} alt="Amnezia logo" /> */}
      {/* </div> */}
    </div>
  );
};

export default HeaderAppScreen;
