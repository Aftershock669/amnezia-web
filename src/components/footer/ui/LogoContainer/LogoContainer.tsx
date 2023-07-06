import classNames from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import styles from './LogoContainer.module.scss';

const LogoContainer = () => {
  return (
    <div className={classNames(styles.root)}>
      <NavLink to="/">
        <img src="/img/logos/logo-with-a-w-glow.svg" alt="Amnezia logo" />
      </NavLink>
    </div>
  );
};

export default LogoContainer;
