import React from 'react';
import { Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';

const deleteLogo = <FontAwesomeIcon icon={faTrashAlt} />
const handleDelete = (id) => {
    const url = `http://localhost:5000/booking/${id}`
    const action = window.confirm('You are deleting one of your booking')
    if (action) {
        axios.delete(url);
    }

}
const Booked = ({ order }) => {
    const { _id, bookingStatus, departure, email, name, packageTitle, phone, totalPerson } = order;
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{packageTitle}, ({totalPerson})</td>
                <td>{departure}</td>
                <td>{bookingStatus}</td>
                <td><Button onClick={() => handleDelete(_id)} variant="danger">{deleteLogo}</Button></td>
            </tr>
        </tbody>
    );
};

export default Booked;