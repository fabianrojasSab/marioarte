import {  Navbar, Container, Nav, } from 'react-bootstrap';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import logo from '../logo.jpg'

function Navigation(){
    return(
        <Navbar collapseOnSelect expand='sm' bg="dark" variant="dark">
            <Container fluid   >
                <img src={logo}  width="60"  height="60" alt="Logo" className="navigation-img" />
                <Navbar.Brand href="#home" className='navigation-txt' >MarioArte</Navbar.Brand>
                <NavbarToggle aria-controls=''/>
                <Navbar.Collapse className="me-auto justify-content-center">
                    <Nav>
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#features">¿Quien es MarioArte?</Nav.Link>
                        <Nav.Link href="#pricing">Servicios</Nav.Link>
                        <Nav.Link href="#pricing">Portafolio</Nav.Link>
                        <Nav.Link href="#pricing">Reconocimientos</Nav.Link>
                        <Nav.Link href="#pricing">Contacto</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navigation ;