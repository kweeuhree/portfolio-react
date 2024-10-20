import { Suspense, lazy } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout } from './pages';
import { ErrorBoundary, Loading } from './components';

import './App.css';

// lazy load MainPage and ContactPage
const MainPage = lazy(() => import('./pages/MainPage'));
const ContactPage = lazy(() => import('./pages/ContactPage/ContactPage'));

function App() {

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage	/>}	/>
            <Route path={'/contact'} element={<ContactPage />} />
            {/* catch all route - replace to a 404 page */}
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;