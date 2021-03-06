import React from 'react'
import { Component } from 'react'
import ParticlesBg from 'particles-bg'


class Background extends Component {
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
        return(
            <>
    <ParticlesBg classtype = "custom" config = { config } bg = {{
                position: "absolute",
                zIndex: 1,
                opacity: .1,
            }} />
            </>
      )}
    }

export default Background