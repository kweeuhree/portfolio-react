// import { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { Layout, ContactPage } from './pages';
import { default as MainPage } from '../src/pages/MainPage';
import { ErrorBoundary } from './components';

import './App.css';

// // lazy load MainPage
// const MainPage = lazy(() => import('./pages/MainPage'));

function App() {

  return (
    <ErrorBoundary>
      {/* <Suspense fallback={<Loading />}> */}
     
      <Routes>
          <Route path="/" element={<Layout />}>
            
            <Route index element={<MainPage	/>}	/>
            <Route path={'contact'} element={<ContactPage />} />
          
          </Route>
             {/* catch all route - replace to a 404 page */}
          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
     
      {/* </Suspense> */}
    </ErrorBoundary>
  );
}

export default App;