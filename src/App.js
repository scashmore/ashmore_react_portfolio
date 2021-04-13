import React from 'react'
import Header from './components/Header.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import Projects from './components/Projects.js';

function App() {
  return (
    <div style={{ backgroundImage: "url(../../images/background.png)" }}>
      <div calssName='header'>
    <Header />
    <Projects />
    <Footer />
    </div>
    </div>
  );
}

export default App;
