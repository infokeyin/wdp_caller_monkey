import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageTransition from '@components/motion/PageTransition';
import { useHashScroll } from '@hooks/useHashScroll';

// Lazy-load all page components for code splitting
const Home = lazy(() => import('@pages/Home/Home'));
const Features = lazy(() => import('@pages/Features/Features'));
const WorksWith = lazy(() => import('@pages/WorksWith/WorksWith'));
const Industries = lazy(() => import('@pages/Industries/Industries'));
const GetStarted = lazy(() => import('@pages/GetStarted/GetStarted'));
const NotFound = lazy(() => import('@pages/NotFound/NotFound'));

/**
 * AppRoutes
 * Separated so PageTransition can call useLocation() inside BrowserRouter.
 */
function AppRoutes() {
  useHashScroll();
  return (
    <PageTransition>
      <Suspense
      // fallback={
      //   <div style={{ padding: '2rem', fontFamily: 'sans-serif', minHeight: '60vh' }}>
      //     Loading…
      //   </div>
      // }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/integrations" element={<WorksWith />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </PageTransition>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
