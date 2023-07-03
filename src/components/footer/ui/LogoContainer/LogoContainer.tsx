import classNames from 'classnames';
import styles from './LogoContainer.module.scss';

const LogoContainer = () => {
  return (
    <div className={classNames(styles.root)}>
      <img src="/img/logo-with-a.svg" alt="Amnezia logo" />
    </div>
  );
};

export default LogoContainer;
