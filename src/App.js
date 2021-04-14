import React from 'react';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import Projects from './components/Projects.js';
import Art from './components/Art.js';
import Resume from './components/Resume.js';
import Contact from './components/Contact.js';
import Background from './components/Background.js';
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div classaName="bgImage" style={{ backgroundImage: "url(../../images/background.png)" }}>
        <div>
          <Header />
          <Background />
          <Route exact path='/' component={Home} />
          <Route exact path='/projects' component={Projects} />
          <Route exact path='/art-portfolio' component={Art} />
          <Route exact path='/resume' component={Resume} />
          <Route exact path='/contact' component={Contact} />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
