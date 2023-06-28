import classNames from 'classnames';
import styles from './LogoContainer.module.scss';
import footerLogo from './assets/footer-logo.png';

const LogoContainer = () => {
  return (
    <div className={classNames(styles.root)}>
      <img src={footerLogo} alt="Amnezia logo" />
    </div>
  );
};

export default LogoContainer;
