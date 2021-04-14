import React from 'react';
import { useRoutes } from 'hookrouter';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import Projects from './components/Projects.js';
import Art from './components/Art.js';
import Resume from './components/Resume.js';
import Contact from './components/Contact.js';
import Background from './components/Background.js'

const routes = {
  '/': () => <Home />,
  '/projects': () => <Projects />,
  '/art-portfolio': () => <Art />,
  '/resume': () => <Resume />,
  '/contact': () => <Contact />
}

function App() {
  const match = useRoutes(routes)
  return (
    <div classaName="bgImage" style={{ backgroundImage: "url(../../images/background.png)" }}>
      <div>
        <Header />
        <Background />
        {match}
        <Footer />
      </div>
    </div>
  );
}

export default App;
