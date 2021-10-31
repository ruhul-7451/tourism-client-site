import React from 'react';
import { Carousel } from 'react-bootstrap';
import Booking from '../Booking/Booking';
import Contact from '../Contact/Contact';
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
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/7SD14tW/Banner-Img-2.jpg"
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://i.ibb.co/rbWhcQW/Banner-Img-3.jpg"
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </section>

            <section className="mt-3">
                <Booking></Booking>
            </section>

            <section className="my-3">
                <ShowDestinations></ShowDestinations>
            </section>

            <section>
                <Contact></Contact>
            </section>

        </div>
    );
};

export default Home;