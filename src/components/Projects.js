import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Projects() {
    return (
        <>
            <div className="page">
                <div className="text">
                    <h2>Projects</h2>
                    <p>Scroll through some of Susan's projects! If you're more interested in a project, click 'To Deployed Site' or 'To GitHub Reop'.</p>
                </div>
                <Carousel className="carousel">
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block citem"
                            src="../../images/doodle.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        <h3><a>To Deployed Site</a></h3>
                        <p><a href="#">To GitHub Repo</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block citem"
                            src="../../images/whole.PNG"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3><a>To Deployed Site</a></h3>
                           <p><a href="#">To GitHub Repo</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block citem"
                            src="../../images/pianoDemo.gif"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3><a>To Deployed Site</a></h3>
                            <p><a href="#">To GitHub Repo</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block citem"
                            src="../../images/RestResult.png"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3><a>To Deployed Site</a></h3>
                            <p><a href="#">To GitHub Repo</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default Projects