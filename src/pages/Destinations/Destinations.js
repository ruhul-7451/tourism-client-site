import axios from 'axios';
import React from 'react';
import { Button, Col, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

const Destinations = () => {
    const { register, handleSubmit, reset } = useForm();
    const history = useHistory();
    const onSubmit = data => {
        axios.post('https://shrieking-crypt-42705.herokuapp.com/destination', data)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        console.log(data);
        reset();
        alert('Thank You for your Add/Request Tour Place');
        history.push('/home');
    }
    return (
        <div className="bg-light p-5">
            <div className="text-center">
                <h2>Add/Request a Tour Place</h2>
            </div>
            <Col lg={6} className="mx-auto p-5  bg-white m-5 shadow rounded">
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Destination</Form.Label>
                            <input placeholder="Location Name" className="form-control" {...register("destination", { required: true })} />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Picture</Form.Label>
                            <input placeholder="Image Url" className="form-control" {...register("picture", { required: true })} />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Label>Package Title</Form.Label>
                        <input placeholder="Tour Duration with Place Name" className="form-control" {...register("title", { required: true })} />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <FloatingLabel label="Description">
                            <textarea className="form-control" style={{ height: '100px' }} {...register("description", { required: true })} />
                        </FloatingLabel>
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col}>
                            <Form.Label>Cost Per Person</Form.Label>
                            <input placeholder="Estimated Amount" className="form-control" type="number" {...register("cost", { required: true })} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Tour Days</Form.Label>
                            <input placeholder="Days" className="form-control" type="number" {...register("days", { required: true })} />
                        </Form.Group>

                        <Form.Group as={Col}>
                            <Form.Label>Place Rating</Form.Label>
                            <input placeholder="Rate out of 5" className="form-control" type="number" {...register("rating", { min: 1, max: 5, required: true })} />
                        </Form.Group>
                    </Row>
                    <Button variant="warning" type="submit">Add Place</Button>
                </Form>
            </Col>
        </div>
    );
};

export default Destinations;