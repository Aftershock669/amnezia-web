import styles from './HeaderAppScreen.module.scss';

const HeaderAppScreen = () => {
  return (
    <div className={styles.root}>
      <img
        // height={25}
        // width={94}
        src="/app-screen-main.png"
        className="logo"
        alt="Amnezia logo"
      />
    </div>
  );
};

export default HeaderAppScreen;
