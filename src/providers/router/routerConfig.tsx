import { createBrowserRouter } from 'react-router-dom';
import { lazy } from 'react';
import Layout from '@src/layouts/Layout/Layout';
// import MainPage from '@src/pages/main/MainPage';
// import DownloadsPage from '@src/pages/downloads/DownloadsPage';
// import SupportPage from '@src/pages/support/SupportPage';
// import AboutPage from '@src/pages/about/AboutPage';
// import InstructionsPage from '@src/pages/instructions/InstructionsPage';
// import NotFoundPage from '@src/pages/notFound/NotFoundPage';
// import TroubleshootingLayout from '@src/layouts/TroubleshootingLayout/TroubleshootingLayout';

import IndexLangSwitch from '@src/components/IndexLangSwitch/IndexLangSwitch';
import LangSwitchRedirect from '@src/components/LangSwitchRedirect/LangSwitchRedirect';
import TroubleshootingLayout from "@src/layouts/TroubleshootingLayout/TroubleshootingLayout";

const MainPage = lazy(() => import('@src/pages/main/MainPage'));
const DownloadsPage = lazy(() => import('@src/pages/downloads/DownloadsPage'));
const SupportPage = lazy(() => import('@src/pages/support/SupportPage'));
const AboutPage = lazy(() => import('@src/pages/about/AboutPage'));
const InstructionsPage = lazy(() => import('@src/pages/instructions/InstructionsPage'));
const NotFoundPage = lazy(() => import('@src/pages/notFound/NotFoundPage'));
const InstructionLayout = lazy(() => import('@src/layouts/InstructionLayout/InstructionLayout'));

export default createBrowserRouter([
  {
    element: <IndexLangSwitch />,
    path: '/',
  },
  {
    element: (
      <LangSwitchRedirect>
        <Layout />
      </LangSwitchRedirect>
    ),
    path: '/:lang',
    children: [
      {
        index: true,
        element: <MainPage />,
      },
      {
        path: 'downloads',
        element: <DownloadsPage />,
      },
      {
        path: 'support',
        element: <SupportPage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'instructions',
        element: <InstructionsPage />,
      },
      {
        path: 'instructions/:instructionId',
        element: <InstructionLayout />,
      },
      {
        path: 'troubleshooting',
        element: <TroubleshootingLayout />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
  // {
  //   element: <Outlet />,
  //   path: '/',
  //   children: [
  //     {
  //       path: '*',
  //       element: <NotFoundPage />,
  //     },
  //   ],
  // },
]);
