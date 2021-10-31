import React, { useEffect, useState } from 'react';
import { Button, Card, Col, ListGroup, Row, Spinner } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import ReactStars from "react-rating-stars-component";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faUndoAlt } from '@fortawesome/free-solid-svg-icons'

const goBack = <FontAwesomeIcon icon={faUndoAlt} />
const bookNow = <FontAwesomeIcon icon={faPaperPlane} />

const DestinationDetails = () => {
    const { id } = useParams();
    const [details, setDetails] = useState([]);
    const history = useHistory();
    useEffect(() => {
        const url = `https://shrieking-crypt-42705.herokuapp.com/destination/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [id]);

    if (details.length === 0) {
        return <div className="text-center p-5"><Spinner variant="secondary" animation="border" /> <h3 className="text-secondary py-3">Loading...</h3></div>;
    }

    const { _id, title, picture, cost, days, description, destination, rating } = details;
    const ratingStar = {
        size: 30,
        value: parseFloat(rating),
        edit: false
    };

    const handleBookNow = (id) => {
        history.push(`/myBooking/${id}`);
    }

    const handleGoBack = () => {
        history.push('/showDestination');
    }
    return (
        <div className="m-5">
            <Row>
                <Col lg={8}>
                    <Card className="bg-white shadow border-0">
                        <Card.Header className="fs-1 text-center fw-bold bg-white">{title}</Card.Header>
                        <Card.Img variant="top" src={picture} />

                    </Card>
                </Col>
                <Col lg={4} className="bg-light shadow p-3 ">
                    <Card>
                        <Card.Header className="fs-4 fw-bold bg-primary text-white">Place: {destination}</Card.Header>
                        <Card.Body>
                            <Card.Text>{description}</Card.Text>
                        </Card.Body>
                        <Card.Header className="fs-4 fw-bold bg-primary text-white">Package Details</Card.Header>
                        <ListGroup variant="flush" className="fs-5">
                            <ListGroup.Item>Tour Type: {days} Days</ListGroup.Item>
                            <ListGroup.Item>{cost} BDT / Per Person</ListGroup.Item>
                            <ListGroup.Item className="d-flex align-items-center"><span className="pe-3">Package Rating:</span> {details.rating ? <ReactStars {...ratingStar} /> : "Stars"}</ListGroup.Item>
                        </ListGroup>
                        <Card.Body className="d-flex justify-content-between align-items-center">
                            <Button onClick={() => handleBookNow(_id)} className="w-50" variant="success">Book Package {bookNow}</Button>
                            <Button onClick={handleGoBack} variant="outline-dark">Go Back {goBack}</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
};

export default DestinationDetails;


