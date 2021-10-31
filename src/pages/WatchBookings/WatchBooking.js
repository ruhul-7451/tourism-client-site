import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import Booked from './Booked/Booked';

const WatchBooking = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://shrieking-crypt-42705.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    if (orders.length === 0) {
        return <div className="text-center p-5"><Spinner variant="secondary" animation="border" /> <h3 className="text-secondary py-3">Loading...</h3></div>;
    }
    return (
        <div className="py-5 m-5 ">
            <h3 className="mb-3 bg-danger p-3 rounded text-light">You Have {orders.length} Tour Plans with us: </h3>
            <Table className="  bg-white" striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Package Name, (Seats)</th>
                        <th>Departure Date</th>
                        <th>Booking Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                    orders.map(order => <Booked key={order._id} order={order}></Booked>)
                }
            </Table>
        </div>

    );
};

export default WatchBooking;