import logo from '../images/logo.svg';
import '../css/App.css';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Help from './Help';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <nav>
            <Link
              to="/">
              Home
            </Link>
            <Link
              to="/about">
              About
            </Link>
            <Link
              to="/help">
              Help
            </Link>
          </nav>
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/help" element={<Help />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
