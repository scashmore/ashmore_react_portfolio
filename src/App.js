import React from 'react'
import Header from './components/Header.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import Projects from './components/Projects.js';
import Art from './components/Art.js';

function App() {
  return (
    <div style={{ backgroundImage: "url(../../images/background.png)" }}>
      <div calssName='header'>
    <Header />
    <Art />
    <Footer />
    </div>
    </div>
  );
}

export default App;
