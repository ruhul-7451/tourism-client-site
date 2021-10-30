import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';

const DestinationDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    useEffect(() => {
        const url = `http://localhost:5000/destination/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [id]);
    const { title, picture, cost, days, description, destination, rating } = details;
    return (
        <div className="m-5">
            <Row>
                <Col lg={8}>
                    <Card border="white shadow">
                        <Card.Header className="fs-1 text-center fw-bold bg-info text-light">{title}</Card.Header>
                        <Card.Img variant="top" src={picture} />
                        <Card.Body>
                            <Card.Title>{destination}</Card.Title>
                            <Card.Text>{description}</Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={4} className="bg-light">
                    <h2> Planned Days {days}</h2>
                    <h2> Total Cost {cost}</h2>
                    <h2> Overall rating {rating}</h2>
                </Col>
            </Row>
        </div>
    );
};

export default DestinationDetails;