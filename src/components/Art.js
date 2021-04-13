import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Art() {
    return (
        <>
            <div className="page">
                <div className="text">
                    <h2>Art Portfolio</h2>
                    <p>Scroll through some of Susan's original art made uitilzing photoshop!</p>
                </div>
                <Carousel className="carousel">
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block citem"
                            src="../../images/hedge.png"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={5000}>
                        <img
                            className="d-block citem"
                            src="../../images/doodle_node.png"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block citem"
                            src="../../images/background.png"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block citem"
                            src="../../images/abstract.gif"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default Art