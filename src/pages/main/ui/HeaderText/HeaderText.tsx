import styles from './HeaderText.module.scss';

const HeaderText = () => {
  return (
    <div className={styles.root}>
      <div className={styles.primaryWrapper}>Создай свой персональный VPN</div>
      <div className={styles.secondaryWrapper}>
        Amnezia VPN — простое и бесплатное приложение для запуска self-hosted VPN с высокими
        требованиями к приватности
      </div>
    </div>
  );
};

export default HeaderText;
