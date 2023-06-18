import { ArrowBigLeft, ChevronDown, Languages, X } from 'lucide-react';
import DrawerNavLink from '@src/components/menuDrawer/ui/DrawerNavLink/DrawerNavLink';
import { NavLink } from 'react-router-dom';
import styles from './MainScreen.module.scss';

interface PT {
  closeDrawer: any;
  goToLocalesScreen: any;
}

const MainScreen = ({ closeDrawer, goToLocalesScreen }: PT) => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <button type="button" className={styles.iconButton} onClick={closeDrawer}>
          <X />
        </button>
      </div>
      <div className={styles.list}>
        <DrawerNavLink text="Главная" to="/" />
        <DrawerNavLink text="FAQ и инструкции" to="/get-started" />
        <DrawerNavLink text="О проекте" to="/about" />
      </div>
      <div className={styles.langSwitchButtonContainer}>
        <button type="button" className={styles.langSwitchButton} onClick={goToLocalesScreen}>
          <Languages />
          <ChevronDown />
        </button>
      </div>
    </div>
  );
};

export default MainScreen;
