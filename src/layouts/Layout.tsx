import { Outlet, useLocation } from 'react-router-dom';
import AppBar from '@src/components/appBar/AppBar';
import Footer from '@src/components/footer/Footer';
import { useDisclosure } from '@mantine/hooks';
import { useEffect } from 'react';
import MenuDrawer from '@src/components/menuDrawer/MenuDrawer';
import styles from './Layout.module.scss';

export default function Layout() {
  const [opened, { open, close }] = useDisclosure(false);

  // close mobile drawer on route change
  const { pathname } = useLocation();
  useEffect(() => {
    close();
  }, [pathname]);

  return (
    <div className={styles.appContainer}>
      <AppBar openDrawerAction={open} />
      <MenuDrawer closeDrawer={close} drawerOpened={opened} />
      <div className={styles.pageContainer}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
