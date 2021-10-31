import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import SingleDestination from './SingleDestination/SingleDestination';

const ShowDestinations = () => {
    const [showPlaces, setShowPlaces] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/destination')
            .then(res => res.json())
            .then(data => setShowPlaces(data))
    }, []);
    if (showPlaces.length === 0) {
        return <div className="text-center p-5"><Spinner variant="secondary" animation="border" /> <h3 className="text-secondary py-3">Loading...</h3></div>;
    }
    return (
        <div className=" px-5 py-3 mx-auto bg-white">
            <div className="bg-primary my-3 text-center shadow p-3 rounded">
                <h3 className="text-light fw-bold text-uppercase mb-0">Choose Your Package</h3>
            </div>
            <Row xs={1} md={2} lg={3} className="g-4">
                {showPlaces.map(place => <SingleDestination key={place._id} place={place} />)}
            </Row>
        </div>
    );
};

export default ShowDestinations;