import { createBrowserRouter } from 'react-router-dom';
import MainRoutes from '@src/providers/router/routes/MainRoutes';
import InstructionsRoutes from '@src/providers/router/routes/InstructionsRoutes';
import ServiceRoutes from '@src/providers/router/routes/ServiceRoutes';

export default createBrowserRouter([MainRoutes, ServiceRoutes]);
