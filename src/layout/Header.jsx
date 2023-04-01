import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <Navbar bg="light" expand="md">
      <Container fluid>
        <Navbar.Brand className="brand">Dev Manager</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
            <NavLink
              to="Home"
              className={({ isActive }) =>
                isActive ? 'active nav-link' : 'nav-link'
              }>
              Home
            </NavLink>
            <NavLink
              to="About"
              className={({ isActive }) =>
                isActive ? 'active nav-link' : 'nav-link'
              }>
              About
            </NavLink>
            <NavLink
              to="Contact"
              className={({ isActive }) =>
                isActive ? 'active nav-link' : 'nav-link'
              }>
              Contact
            </NavLink>
            <NavLink
              to="Register"
              className={({ isActive }) =>
                isActive ? 'active nav-link' : 'nav-link'
              }>
              Register
            </NavLink>
            <NavLink
              to="Login"
              className={({ isActive }) =>
                isActive ? 'active nav-link' : 'nav-link'
              }>
              Login
            </NavLink>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
