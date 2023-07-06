import { RouteObject } from 'react-router-dom';
import Layout from '@src/layouts/Layout/Layout';
import MainPage from '@src/pages/main/MainPage';
import DownloadsPage from '@src/pages/downloads/DownloadsPage';
import AboutPage from '@src/pages/about/AboutPage';
import SupportPage from '@src/pages/support/SupportPage';
import InstructionsPage from '@src/pages/instructions/InstructionsPage';
import Instruction from '@src/pages/instructions/ui/AppInstructionMd/AppInstructionMd';
import HostingInstructions from '@src/pages/instructions/ui/HostingInstructions/HostingInstructions';

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
};

export default MainRoutes;
