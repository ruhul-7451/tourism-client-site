import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/UseAuth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
const userLogo = <FontAwesomeIcon icon={faUser} />
const logoBooking = <FontAwesomeIcon icon={faPaperPlane} />

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home" className="fw-bold">Book My Trip</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/upcomingTours">Upcoming Tours</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="/">Show Destinations</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="/addTourPlace">Add TourPlace</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="/manageUsers">Manage Users</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            {user.email ? <Navbar.Text className="text-light">Hello!<span className="text-warning"> {user.displayName}</span></Navbar.Text> : <Navbar.Text></Navbar.Text>}
                            {user.email ? <Nav.Link as={Link} to="/watchBookings" className="bg-info rounded mx-3 text-white">My Bookings {logoBooking}</Nav.Link> : <> </>}
                            {user.email ? <Nav.Link as={Link} to="/home" className="btn btn-danger text-light" onClick={logOut}>Logout</Nav.Link> : <Nav.Link className="text-dark btn btn-warning" as={Link} to="/login">
                                Login {userLogo}
                            </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;