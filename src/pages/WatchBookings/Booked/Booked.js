import React from 'react';

const Booked = ({ order }) => {
    const { bookingStatus, departure, email, name, packageTitle, phone, totalPerson } = order;
    return (
        <tbody>
            <tr>
                <td>{name}</td>
                <td>{email}</td>
                <td>{phone}</td>
                <td>{packageTitle}</td>
                <td>{departure}</td>
                <td>{bookingStatus}</td>
            </tr>
        </tbody>
    );
};

export default Booked;