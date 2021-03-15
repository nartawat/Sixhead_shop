import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

function MyNavbar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <LinkContainer to="/">
          <Navbar.Brand href="#home">SIXHEAD_SHOP</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <LinkContainer to="/">
              <Nav.Link>home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/myitem">
              <Nav.Link>Service</Nav.Link>
            </LinkContainer>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <LinkContainer to="/formregister">
            <Button variant="warning">Register</Button>
          </LinkContainer>
          &nbsp;&nbsp;
          <Button variant="success">Log-in</Button>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
export default MyNavbar;
