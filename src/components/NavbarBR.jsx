import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidgetRI from "./CartWidgetRI";
import { NavLink } from "react-router-dom";

function NavbarBR() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
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
            <Nav.Link as={NavLink} to="/">HOME</Nav.Link>

            <NavDropdown title="CATALOGO" id="basic-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/category/lectores">Lectores</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/sensores">Sensores</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/accesorios">Accesorios</NavDropdown.Item>
              <NavDropdown.Item as={NavLink} to="/category/tiras reactivas">Tiras reactivas</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">ABOUT</Nav.Link>
          </Nav>
          <NavLink to="/cart" style={{ textDecoration: 'none' }}>
            <CartWidgetRI />
          </NavLink>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarBR;
