import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetRI from "./CartWidgetRI";

function NavbarBR() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="../logo-glucon.png"
            alt="Logo"
            width="100"
            height="100"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">HOME</Nav.Link>
            
            <NavDropdown title="CATALOGO" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Lectores</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Sensores
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                CATALOGO COMPLETO
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">ABOUT</Nav.Link>
          </Nav>
          <CartWidgetRI />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBR;
