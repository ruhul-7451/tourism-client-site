import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Contact = () => {
    const history = useHistory();
    const handleSendMessage = () => {
        alert('Thanks For you Message')
        history.push('/home')
    }
    return (
        <div className="bg-white mx-auto p-5">
            <h2 className="text-primary fw-bold p-3 text-center">Get in Touch</h2>
            <p className="fs-5">If you have any queries you can simply connect with us through email or phone call. We also accept custom tour plan and book events. If you found interest about us we request you to take us chance to make your moments rememberable. </p>
            <Row xs={1} lg={2} className="bg-light py-3 rounded shadow d-flex justify-content-center align-items-center">
                <Col>
                    <img className="img-fluid" src="https://i.ibb.co/9hDJ47r/11.png" alt="pic of couples" />
                </Col>
                <Col className="p-3 rounded col-lg-5">
                    <Form>
                        <Row className="mb-3">
                            <Form.Group as={Col}>
                                <Form.Control type="text" placeholder="Your Name" />
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Control type="text" placeholder="Phone Number" />
                            </Form.Group>
                        </Row>

                        <Form.Group as={Col} >
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>


                        <Form.Control
                            as="textarea"
                            placeholder="Leave a message here"
                            style={{ height: '200px' }}
                            className="my-3"
                        />


                        <Button onClick={handleSendMessage} variant="warning">Send Message</Button>
                    </Form>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;