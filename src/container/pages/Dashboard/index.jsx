import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import exportConnect from '../../../redux/connect';
class Dashboard extends Component {
    render(){
        console.log(this.props)
        return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    {/* <Container> */}
                        <div className="container">
                            <Navbar.Brand href="#home">Masell</Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="me-auto">
                                <Nav.Link href="#features">Product</Nav.Link>
                                <Nav.Link href="#pricing">Supplier</Nav.Link>
                                <Nav.Link href="#pricing">Toko</Nav.Link>
                                {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                </NavDropdown> */}
                                </Nav>
                                <Nav>
                                {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
                                <Nav.Link eventKey={2} href="#memes">
                                    <img src="https://c4.wallpaperflare.com/wallpaper/288/623/752/technology-asus-rog-asus-hd-wallpaper-preview.jpg" width="30" height="30" className="rounded mx-auto rounded-circle" alt="..."></img> {this.props.userInfo.email}
                                </Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </div>
                    {/* </Container> */}
            </Navbar>
        )
    }
}
export default exportConnect(Dashboard);