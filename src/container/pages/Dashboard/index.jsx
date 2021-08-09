import { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Row, Tab, Col } from 'react-bootstrap';
import exportConnect from '../../../redux/connect';
import DataTable from 'react-data-table-component';
class Dashboard extends Component {
    
    render(){
        
        return (
            <Fragment>
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
                <Tab.Container className="bg-light" id="left-tabs-example" defaultActiveKey="first">
                        <Row className="m-2">
                            <Col sm={2} className="bg-light card my-2 p-2">
                                <Nav variant="pills" className="flex-column">
                                    <Nav.Item>
                                        <Nav.Link eventKey="all">Semua products</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="bystore">Berdasarkan toko</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="draft">Draft</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col sm={9}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="all">
                                    <DataTable
                                        title="Arnold Movies"
                                        columns={columns}
                                        customStyles={customStyles}
                                    />
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="bystore">
                                        sdlfsd
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="draft">
                                        sdlfsd
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                </Tab.Container>
            </Fragment>
        )
    }
}

const customStyles = {
    rows: {
      style: {
        minHeight: '72px', // override the row height
      }
    },
    headCells: {
      style: {
        paddingLeft: '8px', // override the cell padding for head cells
        paddingRight: '8px',
      },
    },
    cells: {
      style: {
        paddingLeft: '8px', // override the cell padding for data cells
        paddingRight: '8px',
      },
    },
  };
export default exportConnect(Dashboard);