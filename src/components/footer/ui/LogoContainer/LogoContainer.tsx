import classNames from 'classnames';
import styles from './LogoContainer.module.scss';

const LogoContainer = () => {
  return (
    <div className={classNames(styles.root)}>
      <img src="/img/logos/logo-with-a-w-glow.svg" alt="Amnezia logo" />
    </div>
  );
};

export default LogoContainer;
