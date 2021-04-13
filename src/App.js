import React from 'react';
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
      num: [1, 2],
      rps: 2,
      radius: [1, 5],
      life: [1, 1.5],
      v: [.2, .2],
      tha: [-10, 10],
      alpha: [0.6, 0],
      scale: [0.1, 0.2],
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
          <ParticlesBg classtype="custom" config={config} bg={{
            position: "absolute",
            zIndex: 1,
            opacity: .1,
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
