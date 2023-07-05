import { RouteObject } from 'react-router-dom';
import Layout from '@src/layouts/Layout';
import InstructionsPage from '@src/pages/instructions/InstructionsPage';

const InstructionsRoutes: RouteObject = {
  element: <Layout />,
  path: 'instructions/',
  children: [
    {
      index: true,
      element: <InstructionsPage />,
    },
  ],
};

export default InstructionsRoutes;
