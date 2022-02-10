import logo from '../images/logo.svg';
import '../css/App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Help from './Help';
import { Header } from './Header';

function App() {
  return (
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
        <div className="meta-diagnostic">
          <h2>Meta Information</h2>
          <div>
            {
              Array.from(document.querySelectorAll("head meta")).map((elem, index) => {
                const metaTagInfo = elem.getAttributeNames().map((attrName, index) => {
                  return <p key={index} className="meta-attr-info">
                    <span className="attr-name">
                      {attrName}: 
                    </span>
                    <span className="attr-value">
                      {elem.getAttribute(attrName)}
                    </span>
                  </p>
                })

                return (
                  <div key={index} className="meta-result">
                    <p className="meta-label">{index + 1}. &lt;meta&gt;</p>
                    {metaTagInfo}
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

