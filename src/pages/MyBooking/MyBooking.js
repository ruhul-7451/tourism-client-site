import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../Hooks/UseAuth';

const MyBooking = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const history = useHistory();
    const { register, handleSubmit, reset } = useForm();
    const [fetchDetails, setFetchDetails] = useState([])

    const onSubmit = data => {
        console.log(data);
        reset();
    }
    const handleReturn = () => {
        const skip = window.confirm('You want to Skip booking?')
        if (skip === true) {
            history.push('/home');
        }
    }
    useEffect(() => {
        const url = `http://localhost:5000/destination/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFetchDetails(data))
    }, [id]);
    if (fetchDetails.length === 0) {
        return <div className="text-center p-5"><Spinner variant="secondary" animation="border" /> <h3 className="text-secondary py-3">Loading...</h3></div>;
    }

    const { title, cost } = fetchDetails;
    console.log(fetchDetails);

    return (
        <div className=" bg-light p-3">
            <h2 className="text-center">My booking Id is:{id} </h2>
            <Form onSubmit={handleSubmit(onSubmit)} className="col-lg-6 mx-auto bg-white shadow p-5 rounded">
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Name</Form.Label>
                        <input value={user.displayName || ''} placeholder="Enter Name" className="form-control" {...register("name", { required: true })} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Email</Form.Label>
                        <input value={user.email || ''} placeholder="Enter Email" className="form-control" type="email" {...register("email", { required: true })} />
                    </Form.Group>
                </Row>
                <Form.Group className="mb-3">
                    <Form.Label>Booking Package Title</Form.Label>
                    <input value={title} placeholder="Package title" className="form-control" {...register("packageTitle", { required: true })} />
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Phone Number</Form.Label>
                        <input placeholder="Enter Phone" className="form-control" type="number" {...register("phone", { required: true })} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Total Persons</Form.Label>
                        <input placeholder="Number of Persons" className="form-control" type="number" {...register("totalPerson", { required: true })} />
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Departure Date</Form.Label>
                        <input className="form-control" type="date" {...register("departure", { required: true })} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col}>
                        <Form.Label>Arrival Date</Form.Label>
                        <input placeholder="Days" className="form-control" type="date" {...register("arrival", { required: true })} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Per Person Cost</Form.Label>
                        <input value={cost} placeholder="Estimated Amount" className="form-control" type="number" {...register("personCost", { required: true })} />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Label>Booking Status</Form.Label>
                        <input className="form-control" type="text" readOnly {...register("bookingStatus", { required: true, value: "Pending" })} />
                    </Form.Group>
                </Row>
                <div className="d-flex justify-content-between align-items-center">
                    <Button variant="success" type="submit">Book Now</Button>
                    <Button onClick={handleReturn} variant="outline-dark">Go Home</Button>
                </div>
            </Form>
        </div>
    );
};

export default MyBooking;