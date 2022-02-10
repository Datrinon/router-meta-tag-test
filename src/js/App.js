import logo from '../images/logo.svg';
import '../css/App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Help from './Help';
import { Header } from './Header';
import { MetaDiagnostic } from './MetaDiagnostic';

import { HelmetProvider, Helmet } from 'react-helmet-async';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta name="robots" content="index, follow"/>
      </Helmet>
      <BrowserRouter>
        <div className="App">
          <Header />
          <main className="content">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/help" element={<Help />} />
            </Routes>
          </main>
          <MetaDiagnostic />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;


