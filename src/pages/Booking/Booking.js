import React from 'react';
import { Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExchangeAlt, faMapMarkedAlt, faMapMarkerAlt, faSearch } from '@fortawesome/free-solid-svg-icons';
const location = <FontAwesomeIcon icon={faMapMarkerAlt} />
const destination = <FontAwesomeIcon icon={faMapMarkedAlt} />
const search = <FontAwesomeIcon icon={faSearch} />
const alter = <FontAwesomeIcon icon={faExchangeAlt} />

const Booking = () => {
    const handleSearch = (e) => {
        e.preventDefault();
    }
    return (
        <div className="bg-white  py-5">
            <Col lg={10} className="bg-secondary rounded shadow mx-auto py-5">
                <form className="row gy-2 gx-3 align-items-center justify-content-center">
                    <div className="col-auto">
                        <div className="input-group">
                            <div className="input-group-text bg-white">{location}</div>
                            <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="Where From" />
                        </div>
                    </div>
                    <div className="col-auto">
                        <div className="input-group">
                            <div className="input-group-text bg-white">{destination}</div>
                            <input type="text" className="form-control" id="autoSizingInputGroup" placeholder="Destination" />
                        </div>
                    </div>
                    <div className="col-auto d-flex justify-content-between align-items-center">
                        <input type="date" className="form-control" id="autoSizingInputGroup" placeholder="Departing" />
                        <span className="mx-3 col-auto">{alter}</span>
                        <input type="date" className="form-control" id="autoSizingInputGroup" placeholder="Returning" />
                    </div>
                    <div className="col-auto">
                        <select className="form-select" id="selectPlan">
                            <option >Select Tour Plan</option>
                            <option>Weekend Tour</option>
                            <option>Budget Tour</option>
                            <option>Family Tour</option>
                        </select>
                    </div>
                    <div className="col-auto">
                        <select className="form-select" size="1" aria-label="size 3 select example">
                            <option>Persons</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                            <option>6</option>
                            <option>7</option>
                        </select>
                    </div>
                    <div className="col-auto">
                        <button onClick={handleSearch} type="submit" className="btn btn-warning">{search} Search</button>
                    </div>
                </form>
            </Col>
        </div>
    );
};

export default Booking;