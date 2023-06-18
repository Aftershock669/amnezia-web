import { RouteObject } from 'react-router-dom';
import Layout from '@src/layouts/Layout';
import InstructionsPage from '@src/pages/instructions/InstructionsPage';
import Instruction1Page from '@src/pages/instructions/ui/Instruction1Page';
import Instruction2Page from '@src/pages/instructions/ui/Instruction2Page';

const InstructionsRoutes: RouteObject = {
  element: <Layout />,
  path: 'instructions/',
  children: [
    {
      index: true,
      element: <InstructionsPage />,
    },
    {
      path: 'instruction1',
      element: <Instruction1Page />,
    },
    {
      path: 'instruction2',
      element: <Instruction2Page />,
    },
  ],
};

export default InstructionsRoutes;
