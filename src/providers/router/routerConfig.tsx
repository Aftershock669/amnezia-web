import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom';
import Layout from '@src/layouts/Layout/Layout';
import MainPage from '@src/pages/main/MainPage';
import DownloadsPage from '@src/pages/downloads/DownloadsPage';
import SupportPage from '@src/pages/support/SupportPage';
import AboutPage from '@src/pages/about/AboutPage';
import InstructionsPage from '@src/pages/instructions/InstructionsPage';
import HostingInstructions from '@src/pages/instructions/ui/HostingInstructions/HostingInstructions';
import Instruction from '@src/pages/instructions/ui/AppInstructionMd/AppInstructionMd';
import NotFoundPage from '@src/pages/notFound/NotFoundPage';
import LanguagePath from '@src/components/LanguagePath/LanguagePath';
import IndexLangSwitch from '@src/components/IndexLangSwitch/IndexLangSwitch';

export default createBrowserRouter([
  {
    element: <IndexLangSwitch />,
    path: '/',
  },
  {
    element: <Layout />,
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
        path: 'instructions/starter-guide',
        element: <HostingInstructions />,
      },
      {
        path: 'instructions/:id',
        element: <Instruction />,
      },
    ],
  },
  {
    element: <Outlet />,
    path: '/',
    children: [
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
