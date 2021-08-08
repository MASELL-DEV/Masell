import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import exportConnect from '../../../redux/connect';

class Landing extends Component {
    render() {
        return ( 
            <div className = "row justify-content-center">
                <div className="col-sm-12 text-center mt-5 mb-5">
                    <div className="jumbotron mt-5">
                        <div className="container">
                            <h1 className="display-4">Welcome in Masell Indonesia</h1>
                            <div className="row justify-content-center mb-2">
                                <div className="col-sm-4">
                                    <Link to="/auth" className="btn btn-primary" variant="primary">Login</Link>
                                </div>

                            </div>
                            <div className="row justify-content-center mb-2">
                                <div className="col-sm-4">
                                <Button variant="secondary">Coba gratis</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default exportConnect(Landing)