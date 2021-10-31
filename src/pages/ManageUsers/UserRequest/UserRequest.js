import { Button } from 'react-bootstrap';
import React from 'react';

const UserRequest = ({ userOrder }) => {
    const { _id, bookingStatus, departure, email, name, packageTitle, phone, totalPerson } = userOrder;
    const handleConfirmation = (id) => {
        console.log('I am clicked', id);
        const url = `http://localhost:5000/booking/${id}`
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ bookingStatus })
        })
            .then(res => res.json())
        // .then(data => console.log(data))
    }

    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{packageTitle}, ({totalPerson})</td>
                <td>{departure}</td>
                <td>{bookingStatus}</td>
                <td><Button onClick={() => handleConfirmation(_id)} variant="success">Confirm</Button></td>
            </tr>
        </tbody>
    );
};

export default UserRequest;