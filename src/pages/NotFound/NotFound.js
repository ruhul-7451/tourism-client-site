import React from 'react';
import './NotFound.css'
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndoAlt } from '@fortawesome/free-solid-svg-icons'

const goBack = <FontAwesomeIcon icon={faUndoAlt} />
const NotFound = () => {
    const history = useHistory()
    const handleGoHome = () => {
        history.push('/home')
    }
    return (
        <div className="mb-3">
            <div className="img-wrapper text-center">
                <img className="img-fluid w-75"
                    src="https://i.ibb.co/WDmg4MG/Error-404.png" alt="Error 404!" />
                <div className="img-overlay">
                    <Button onClick={handleGoHome} variant="dark">Go Home {goBack}</Button>
                </div>
            </div>
        </div>
    );
};

export default NotFound;