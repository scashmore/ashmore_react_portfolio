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
                        <a className="textdec" href="https://tranquil-retreat-59849.herokuapp.com/"><h3>To Deployed Site</h3></a>
                        <p><a className="textdec" href="https://github.com/scashmore/Doodle-Node">To GitHub Repo</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block citem"
                            src="../../images/whole.PNG"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                        <h3><a className="textdec" href="https://scashmore.github.io/Password_Generator/">To Deployed Site</a></h3>
                           <p><a className="textdec" href="https://github.com/scashmore/Password_Generator">To GitHub Repo</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block citem"
                            src="../../images/pianoDemo.gif"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3><a className="textdec" href="#">Deployed Site Soon to Come</a></h3>
                            <p><a className="textdec" href="https://github.com/scashmore/piano_react">To GitHub Repo</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block citem"
                            src="../../images/RestResult.png"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3><a className="textdec" href="https://scashmore.github.io/Restaurants-Near-Me/">To Deployed Site</a></h3>
                            <p><a className="textdec" href="https://github.com/scashmore/Restaurants-Near-Me">To GitHub Repo</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block citem"
                            src="../../images/readme.gif"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3 className="textdec">Read Me Generator</h3>
                            <p><a className="textdec" href="https://github.com/scashmore/README_Generator">To GitHub Repo</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block citem"
                            src="../../images/Employee.gif"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3><a className="textdec" href="https://scashmore.github.io/user-directory/">To Deployed Site</a></h3>
                            <p><a className="textdec" href="https://github.com/scashmore/user-directory">To GitHub Repo</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default Projects