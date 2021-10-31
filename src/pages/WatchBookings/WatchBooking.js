import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Booked from './Booked/Booked';

const WatchBooking = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    console.log(orders);
    return (
        <Table className="container my-5" striped bordered hover responsive>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Package Name</th>
                    <th>Departure Date</th>
                    <th>Booking Status</th>
                </tr>
            </thead>
            {
                orders.map(order => <Booked key={order._id} order={order}></Booked>)
            }
        </Table>
    );
};

export default WatchBooking;