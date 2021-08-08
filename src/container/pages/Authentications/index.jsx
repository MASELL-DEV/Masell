

import { Component, Fragment } from 'react';
import { Card, Form, Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FacebookLoginButton, GoogleLoginButton } from 'react-social-login-buttons';
import Navigator from '../../Routes/Navigator';
import exportConnect from '../../../redux/connect';


class Login extends Component {

    state = {
        email: '',
        password: '',
        validate: false,
        message: '',
    }

    _handleSubmited = (e) => {
        e.preventDefault();

        

        if(this.state.email === ''){
            this.setState({
                validate: true,
                message: 'email is required!'
            })

            return;
        }

        if(this.state.password === ''){
            this.setState({
                validate: true,
                message: 'password is required!'
            })

            return;
        }

        let userInfo = {
            email: this.state.email,
            password: this.state.password
        }

        

        this.props.login(userInfo)
        Navigator.push(this.props, '/')
    }


    _handleChanged = (event) => {

        

        this.setState({
            [event.target.name]: event.target.value,
            validate: false,
            message: ''
        })
    }

    render(){
        
        return (
            <Fragment>
                <div className="row justify-content-center mb-5">
                    <div className="col-sm-5 mt-5">
                    <Card className="mt-5">
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" onChange={this._handleChanged} name="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control name="password" onChange={this._handleChanged} type="password" placeholder="Password" />
                                </Form.Group>
                                
                                <Button onClick={this._handleSubmited} variant="primary" className="col-sm-12" type="submit">
                                    Login
                                </Button>
                                { this.state.validate ? <div className="alert alert-danger mt-2" role="alert">
                                    {this.state.message}
                                </div> : null}
                                <p className="mt-2">Belum punya akun? <Link to="/register">Register</Link> </p>
                                <Row>
                                    <Col md>
                                        <FacebookLoginButton onClick={() => alert("Hello")} />
                                    </Col>
                                    <Col md>
                                        <GoogleLoginButton onClick={() => alert("Hello")} />
                                    </Col>
                                </Row>
                                
                                
                            </Form>
                        </Card.Body>
                    </Card>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default exportConnect(Login)
// export default Login