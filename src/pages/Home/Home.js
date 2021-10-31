import React from 'react';
import { Carousel } from 'react-bootstrap';
import Booking from '../Booking/Booking';
import ShowDestinations from '../ShowDestinations/ShowDestinations';

const Home = () => {
    return (
        <div className="bg-light">
            <section>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/WGcPg2m/Banner-Img-1.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/7SD14tW/Banner-Img-2.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/rbWhcQW/Banner-Img-3.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </section>

            <section className="my-3">
                <Booking></Booking>
            </section>

            <section>
                <ShowDestinations></ShowDestinations>
            </section>

        </div>
    );
};

export default Home;