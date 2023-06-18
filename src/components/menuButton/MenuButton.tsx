import { MenuIcon } from 'lucide-react';
import styles from './MenuButton.module.scss';

interface PT {
  onClick?: any;
}

const MenuButton = ({ onClick }: PT) => {
  return (
    <button type="button" onClick={onClick} className={styles.root}>
      <MenuIcon />
    </button>
  );
};

export default MenuButton;
