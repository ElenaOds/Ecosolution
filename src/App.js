import { lazy } from 'react';

const LandingPage = lazy(() => import('./pages/LandingPage'));

function App() {
  return (
    <div>
    <LandingPage />
    </div>
  );
}

export default App;
