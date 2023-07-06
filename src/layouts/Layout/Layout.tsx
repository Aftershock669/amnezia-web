import { Outlet, useLocation } from 'react-router-dom';
import AppBar from '@src/components/appBar/AppBar';
import Footer from '@src/components/footer/Footer';
import { useDisclosure } from '@mantine/hooks';
import { createContext, useEffect, useState } from 'react';
import MenuDrawer from '@src/components/menuDrawer/MenuDrawer';
// import AppContainer from '@src/components/AppContainer/AppContainer';
import ScrollToTop from '@src/components/ScrollToTop/ScrollToTop';
import styles from './Layout.module.scss';

// export const ThemeContext = createContext({
//   bg: 'dark-90',
//   switchBg: () => {},
// });

export default function Layout() {
  const [opened, { open, close }] = useDisclosure(false);

  // const switchTheme = (theme: string) => {
  //   setWindowTheme({
  //     theme,
  //     switchTheme,
  //   });
  // };
  //
  // const [windowTheme, setWindowTheme] = useState({
  //   theme: 'dark-90',
  //   switchTheme,
  // });

  // close mobile drawer on route change
  const { pathname } = useLocation();

  useEffect(() => {
    close();
  }, [pathname]);

  return (
    // <AppContainer>

    <div className={styles.appContainer}>
      <ScrollToTop />
      <AppBar openDrawerAction={open} />
      <MenuDrawer closeDrawer={close} drawerOpened={opened} />
      <div className={styles.pageContainer}>
        <Outlet />
      </div>
      <Footer />
    </div>

    // </AppContainer>
  );
}
