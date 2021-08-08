
import { Component, Fragment } from 'react';
import { Card, Form, Button, Row, Col, FloatingLabel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Register extends Component {
    render(){
        return (
            <Fragment>
                <div className="row justify-content-center mb-5">
                    <div className="col-sm-5 mt-5">
                    <Card className="mt-5">
                        <Card.Body>
                            <Form>
                                <Row className="g-2">
                                    <Col md>
                                        <FloatingLabel controlId="floatingInputGrid" label="First Name">
                                        <Form.Control type="text" placeholder="firstname" />
                                        </FloatingLabel>
                                    </Col>
                                    <Col md>
                                        <FloatingLabel controlId="floatingInputGrid" label="Last Name">
                                        <Form.Control type="text" placeholder="firstname" />
                                        </FloatingLabel>
                                    </Col>
                                </Row>

                                <Row className="g-2 mt-2">
                                    <Col md>
                                        <FloatingLabel controlId="floatingInputGrid" label="Email address">
                                        <Form.Control type="email" placeholder="name@example.com" />
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Row className="g-2 mt-2">
                                    <Col md>
                                        <FloatingLabel controlId="floatingInputGrid" label="password">
                                        <Form.Control type="password" placeholder="*******" />
                                        </FloatingLabel>
                                    </Col>
                                    <Col md>
                                        <FloatingLabel controlId="floatingInputGrid" label="Confirm Password">
                                        <Form.Control type="password" placeholder="*******" />
                                        </FloatingLabel>
                                    </Col>
                                </Row>
                                <Button variant="primary" className="col-sm-12 mt-3" type="submit">
                                    Register
                                </Button>
                                <p>Sudah punya akun? <Link to="/auth">Login</Link> </p>
                            </Form>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default Register