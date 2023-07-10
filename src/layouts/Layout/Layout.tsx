import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@src/components/appBar/AppBar';
import Footer from '@src/components/footer/Footer';
import { useDisclosure } from '@mantine/hooks';
import { useEffect, useState } from 'react';
import MenuDrawer from '@src/components/menuDrawer/MenuDrawer';
// import AppContainer from '@src/components/AppContainer/AppContainer';
import ScrollToTop from '@src/components/ScrollToTop/ScrollToTop';
import i18n from 'i18next';
import isSupportedLang from '@src/shared/helpers/isSupportedLang';
import DecoratedPageLayout from '@src/layouts/DecoratedPaageLayout/DecoratedPageLayout';
import styles from './Layout.module.scss';

export default function Layout() {
  const [opened, { open, close }] = useDisclosure(false);
  const [bg, setBg] = useState('darker');

  const location = useLocation();
  const navigate = useNavigate();

  // close mobile drawer on route change
  const { pathname } = useLocation();

  useEffect(() => {
    const resolvedLang = i18n.resolvedLanguage;

    const urlLang = location.pathname.split('/')[1];

    if (!isSupportedLang(urlLang)) {
      // incorrect URL lang
      navigate(`/${resolvedLang}`, { replace: true });
    } else if (resolvedLang !== urlLang) {
      // correct URL lang but unsynced
      // sync lang in URL and i18n. FIX things For browser history (back, forward)
      i18n.changeLanguage(urlLang);
    }
  });

  useEffect(() => {
    close();
  }, [pathname]);

  return (
    <DecoratedPageLayout bg={bg}>
      <ScrollToTop />
      <AppBar openDrawerAction={open} />
      <MenuDrawer closeDrawer={close} drawerOpened={opened} />
      <Outlet context={[setBg, bg]} />
      <Footer />
    </DecoratedPageLayout>

    // </AppContainer>
  );
}
