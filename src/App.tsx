// import reactLogo from '@assets/react.svg';
import { Suspense } from 'react';
import { RouterProvider } from 'react-router-dom';
import routerConfig from '@src/providers/router/config/routerConfig';
import '@src/styles/index.scss';
import '@src/shared/config/i18n/i18n';

function App() {
  return (
    <div className="app">
      <Suspense fallback="loading translation...">
        <RouterProvider router={routerConfig} />
      </Suspense>
    </div>
  );
}

export default App;
