import React from "react";
import Carousel from "react-bootstrap/Carousel";

const Slider = () => {
    return (
        <>
            <section id="slider">
                <Carousel fade pause="false" indicators={false} controls={false}>
                    <Carousel.Item>
                        <video
                            autoPlay
                            muted
                            loop
                            className="d-block w-100 sliderVideo"
                        >
                            <source src="/videos/video-1.mp4" type="video/mp4" />
                        </video>

                        {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>
                            Nulla vitae elit libero, a pharetra augue mollis
                            interdum.
                        </p>
                    </Carousel.Caption> */}
                    </Carousel.Item>

                    {/* <Carousel.Item>
                        <img
                            className="d-block w-100 sliderImg"
                            src="/slider1.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit.
                        </p>
                    </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>
            </section>
        </>
    );
};

export default Slider;
