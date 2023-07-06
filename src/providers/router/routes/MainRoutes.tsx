import { RouteObject } from 'react-router-dom';
import Layout from '@src/layouts/Layout';
import MainPage from '@src/pages/main/MainPage';
import DownloadsPage from '@src/pages/downloads/DownloadsPage';
import AboutPage from '@src/pages/about/AboutPage';
import SupportPage from '@src/pages/support/SupportPage';
import InstructionsPage from '@src/pages/instructions/InstructionsPage';
import Instruction from '@src/pages/instructions/ui/InstructionMd/InstructionMd';
import StarterGuidePage from '@src/pages/starter-guide/StarterGuidePage';

const MainRoutes: RouteObject = {
  element: <Layout />,
  path: '/',
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
      path: 'starter-guide',
      element: <StarterGuidePage />,
    },
    {
      path: 'instructions',
      element: <InstructionsPage />,
    },
    {
      path: 'instructions/:id',
      element: <Instruction />,
    },
  ],
};

export default MainRoutes;
