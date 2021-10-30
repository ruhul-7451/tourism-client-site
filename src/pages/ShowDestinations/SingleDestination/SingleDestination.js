import React from 'react';
import { Card, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

const SingleDestination = ({ place }) => {
    const { _id, description, destination, title, picture } = place;
    const history = useHistory();
    const handlePkgDetail = (id) => {
        history.push(`/pickedDestination/${id}`);
    }
    return (
        <div>
            <Col className="shadow rounded border-0">
                <Card style={{ backgroundColor: '#F0F0FF' }}>
                    <Card.Img variant="top" src={picture} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>{description.slice(0, 150)}</Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem className="fw-bold">{destination}</ListGroupItem>
                    </ListGroup>
                    <Card.Body className=" d-flex justify-content-between bg-dark">
                        <Card.Link className="btn btn-outline-warning" onClick={() => handlePkgDetail(_id)}>Package Details</Card.Link>
                        <Card.Link className="btn btn-outline-info" as={Link} to="/home">Go Back</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        </div >
    );
};

export default SingleDestination;