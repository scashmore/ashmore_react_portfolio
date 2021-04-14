import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Projects() {
    return (
        <>
            <div className="page">
                <div className="text">
                    <h2>Projects</h2>
                    <p>Scroll through some of Susan's projects! If you're more interested in a project, click directly on the picture for some deployed websites, or 'To GitHub Reop' for an overview of the code!</p>
                </div>
                <Carousel className="carousel">
                    <Carousel.Item interval={5000}>
                        <a href="https://tranquil-retreat-59849.herokuapp.com/"><img
                            className="d-block citem"
                            src="../../images/doodle.png"
                            alt="First slide"
                        /></a>
                        <Carousel.Caption>
                        <p><a className="textdec" href="https://github.com/scashmore/Doodle-Node">To GitHub Repo</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <a href="https://scashmore.github.io/Password_Generator/"><img
                            className="d-block citem"
                            src="../../images/whole.PNG"
                            alt="Second slide"
                        /></a>
                        <Carousel.Caption>
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
                            <p><a className="textdec" href="https://github.com/scashmore/piano_react">To GitHub Repo</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="https://scashmore.github.io/Restaurants-Near-Me/"><img
                            className="d-block citem"
                            src="../../images/RestResult.png"
                            alt="Third slide"
                        /></a>
                        <Carousel.Caption>
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
                            <p><a className="textdec" href="https://github.com/scashmore/README_Generator">To GitHub Repo</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <a href="https://scashmore.github.io/user-directory/"><img
                            className="d-block citem"
                            src="../../images/Employee.gif"
                            alt="Third slide"
                        /></a>
                        <Carousel.Caption>
                            <p><a className="textdec" href="https://github.com/scashmore/user-directory">To GitHub Repo</a></p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default Projects