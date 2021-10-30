import axios from 'axios';
import React from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const Destinations = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/destination', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(data);
        reset();
    }
    return (
        <div className="bg-light p-5">
            <Col lg={6} className="mx-auto p-5  bg-white m-5 shadow rounded">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Destination</Form.Label>
                            <input className="form-control" {...register("destination")} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Picture</Form.Label>
                            <input className="form-control" {...register("picture")} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Package Title</Form.Label>
                        <input className="form-control" {...register("title")} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <FloatingLabel controlId="floatingTextarea2" label="Description">
                            <input className="form-control" type="textarea" style={{ height: '100px' }} {...register("description")} />
                        </FloatingLabel>
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Cost Per Person</Form.Label>
                            <input className="form-control" type="number" {...register("cost")} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Tour Days</Form.Label>
                            <input className="form-control" type="number" {...register("days")} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>Place Rating</Form.Label>
                            <input className="form-control" type="number" {...register("rating", { min: 1, max: 5 })} />
                        </Form.Group>
                    </Row>
                    <Button variant="warning" type="submit">Add Destination</Button>
                </Form>

            </Col>
        </div>
    );
};

export default Destinations;