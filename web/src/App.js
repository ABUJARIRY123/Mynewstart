import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleRight } from '@fortawesome/free-solid-svg-icons';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import AboutUs from './AboutUs';
import Portals from './Portals';
import Contacts from './Contacts';
import Donate from './Donate';
import Footer from './Footer';
import SahihBukhaary from './SahihBukhaary';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/portals" element={<Portals />} />
          <Route path="/category/teacher2/hadeeth/sahih-bukhaary" element={<Sidebar />} /> {/* Add this route */}

        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
