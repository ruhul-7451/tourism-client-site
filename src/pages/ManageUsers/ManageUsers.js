import React, { useEffect, useState } from 'react';
import { Spinner, Table } from 'react-bootstrap';
import UserRequest from './UserRequest/UserRequest';

const ManageUsers = () => {
    const [userOrders, setUserOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/booking')
            .then(res => res.json())
            .then(data => setUserOrders(data))
    }, [])
    if (userOrders.length === 0) {
        return <div className="text-center p-5"><Spinner variant="secondary" animation="border" /> <h3 className="text-secondary py-3">Loading...</h3></div>;
    }
    // console.log(userOrders);
    return (
        <div className="col-lg-10 col-11 mx-auto">
            <h3 className="text-center bg-danger text-dark m-3 p-3 rounded">Total <span className="text-white">[ {userOrders.length} ]</span> bookings Received</h3>
            <Table striped bordered hover responsive>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Package Name, (Seats)</th>
                        <th>Departure Date</th>
                        <th>Booking Status</th>
                        <th>Confirm</th>
                    </tr>
                </thead>
                {
                    userOrders.map(userOrder => <UserRequest key={userOrder._id} userOrder={userOrder}></UserRequest>)
                }
            </Table>
        </div>
    );
};

export default ManageUsers;