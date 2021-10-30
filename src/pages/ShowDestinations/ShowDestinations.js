import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleDestination from './SingleDestination/SingleDestination';

const ShowDestinations = () => {
    const [showPlaces, setShowPlaces] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/destination')
            .then(res => res.json())
            .then(data => setShowPlaces(data))
    }, []);
    console.log(showPlaces);
    return (
        <div className=" px-5 pb-5 mx-auto bg-white">
            <div className="bg-primary my-5 text-center shadow p-3 rounded">
                <h3 className="text-light fw-bold text-uppercase mb-0">Choose Your Package</h3>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4">
                {showPlaces.map(place => <SingleDestination key={place._id} place={place} />)}
            </Row>
        </div>
    );
};

export default ShowDestinations;