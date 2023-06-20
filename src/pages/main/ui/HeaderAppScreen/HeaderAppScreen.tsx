import styles from './HeaderAppScreen.module.scss';

const HeaderAppScreen = () => {
  return (
    <div className={styles.root}>
      <div className={styles.screenWrapper}>
        <img
          src="/app-screen-main.png"
          className={styles.screenImg}
          alt="Amnezia logo"
        />
      </div>
      <img
        src="/app-bg.svg"
        className={styles.bgLightImg}
        alt="Amnezia logo"
      />
      {/*<div className={styles.logoWrapper}>*/}
        <img
          src="/logo-bg.svg"
          className={styles.bgLogoImg}
          alt="Amnezia logo"
        />
      {/*</div>*/}
    </div>
  );
};

export default HeaderAppScreen;
