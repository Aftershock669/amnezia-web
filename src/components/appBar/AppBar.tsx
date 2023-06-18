import { NavLink } from 'react-router-dom';
import AppBarLink from '@src/components/appBar/ui/appBarLink/AppBarLink';
import LangSwitch from '@src/components/langSwitch/LangSwitch';
import { MenuIcon } from 'lucide-react';
import MenuButton from '@src/components/menuButton/MenuButton';
import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import LocaleSwitchModal from '@src/components/localeSwitchModal/LocaleSwitchModal';
import { useTranslation } from 'react-i18next';
import styles from './AppBar.module.scss';

interface PT {
  openDrawerAction: any;
}

const AppBar = ({ openDrawerAction }: PT) => {
  const { t } = useTranslation();

  return (
    <div className={styles.appBar}>
      <div className={styles.section}>
        <NavLink to="/">
          <img
            height={25}
            width={94}
            src="/logo-text-colorfull.png"
            className="logo"
            alt="Amnezia logo"
          />
        </NavLink>
      </div>

      <nav className={styles.nav}>
        <AppBarLink to="/support" text={t('navigation.support')} />
        <AppBarLink to="/about" text={t('navigation.about')} />
      </nav>

      {/* <LangSwitch /> */}
      <LocaleSwitchModal />
      <MenuButton onClick={openDrawerAction} />
    </div>
  );
};

export default AppBar;
