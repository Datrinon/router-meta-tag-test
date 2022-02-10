import '../../css/App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Help from './Help';
import { Header } from './Shared/Header';
import { MetaDiagnostic } from './Shared/MetaDiagnostic';

import { HelmetProvider, Helmet } from 'react-helmet-async';
import Page from './Page';

import { MetaTagGroup } from './../models/MetaTagGroup';

function App() {
  return (
    <HelmetProvider>
      <Helmet>
        <meta name="robots" content="index, follow" />
      </Helmet>
      <BrowserRouter>
        <div className="App">
          <Header />
          <main className="content">
            <Routes>
              <Route
                path="/"
                element={
                  <Page meta={new MetaTagGroup("App Home", "B", "C", "D", "E")}>
                    <Home />
                  </Page>
                }
              />
              <Route
                path="/about"
                element={
                  <Page meta={new MetaTagGroup("App About", "2", "3", "4", "5")}>
                    <About />
                  </Page>
                }
              />
              <Route
                path="/help"
                element={
                  <Page meta={new MetaTagGroup("App Help", "X", "X", "W", "Z")}>
                    <Help />
                  </Page>
                }
              />
            </Routes>
          </main>
          <MetaDiagnostic />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;


