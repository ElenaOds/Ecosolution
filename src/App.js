import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LandingPage = lazy(() => import('./pages/LandingPage'));

function App() {
  return (
    <div>
    <LandingPage />
    <ToastContainer autoClose={3000} theme="colored"/>
    </div>
  );
}

export default App;
