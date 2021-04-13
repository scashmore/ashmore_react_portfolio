import React from 'react';
import { render } from "react-dom";
import { Component } from 'react';
import Header from './components/Header.js';
import Home from './components/Home.js';
import Footer from './components/Footer.js';
import Projects from './components/Projects.js';
import Art from './components/Art.js';
import Resume from './components/Resume.js';
import Contact from './components/Contact.js';
import ParticlesBg from 'particles-bg'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "React"
    };
  }

  render() {
    let config = {
      num: [4, 7],
      rps: 0.1,
      radius: [5, 40],
      life: [1.5, 3],
      v: [1, 1.5],
      tha: [-40, 40],
      zIndex: 2,
      alpha: [.4, 0],
      scale: [.1, 0.4],
      position: "all",
      color: ["random", "#ff0000"],
      cross: "dead",
      // emitter: "follow",
      random: 15
    };

    if (Math.random() > 0.85) {
      config = Object.assign(config, {
        onParticleUpdate: (ctx, particle) => {
          ctx.beginPath();
          ctx.rect(
            particle.p.x,
            particle.p.y,
            particle.radius * 2,
            particle.radius * 2
          );
          ctx.fillStyle = particle.color;
          ctx.fill();
          ctx.closePath();
        }
      });
    }
    return (
      <div style={{ backgroundImage: "url(../../images/background.png)" }}>
        <div calssName='header'>
          <ParticlesBg type="custom" config={config} bg={{
            position: "absolute",
            zIndex: 1,
          }} />
          <Header />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
