import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import TermsAndPolicy from './pages/TermsAndPolicy';
import Disclaimer from './pages/Disclaimer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
      
        <Route path="/" exact component={Home} />
        {/* <Route path="/terms&policy" component={TermsAndPolicy} />
        <Route path="/disclaimer" exact component={Disclaimer} /> */}
      
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
