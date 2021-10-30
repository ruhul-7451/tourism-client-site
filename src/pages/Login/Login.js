import React, { useState } from 'react';
import { Button, Col, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import useAuth from '../../Hooks/UseAuth';
const googleLogo = <FontAwesomeIcon icon={faGoogle} />

const Login = () => {
    let [isChecked, SetIsChecked] = useState(false);
    const { user, setUser, signInUsingGoogle, } = useAuth();

    const toggleChange = (e) => {
        e.target.checked ? SetIsChecked(true) : SetIsChecked(false)
        console.log(isChecked);
    }

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then((result) => {
                setUser(result.user);
                console.log(user);
            })
    };

    return (
        <div className="bg-light py-5">
            <Col xs={10} md={8} lg={3} className="shadow mx-auto p-5 bg-white rounded">
                <h3 className="text-center">Please {isChecked ? "Register" : "Login"}</h3>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group onChange={toggleChange} className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Don't Have an Account?" />
                    </Form.Group>
                    <Form.Group className="d-grid gap-2">
                        <Button variant="primary">
                            {isChecked ? "Register" : "Login"}
                        </Button>
                        <Button onClick={handleGoogleLogin} variant="secondary">
                            {googleLogo} Sign In Using Google
                        </Button>
                    </Form.Group>
                </Form>
            </Col>
        </div>
    );
};

export default Login;