import { useContext } from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../context/AuthContext'
const MainNavbar = () => {
  const {logout, user} = useContext(AuthContext)
  return (
    <Navbar bg="light" expand="md">
      <Container fluid>
        <Navbar.Brand className="brand">
          <Link to="Home">Dev Manager</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {user && (
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
                to="edit-contact"
                className={({ isActive }) =>
                  isActive ? 'active nav-link' : 'nav-link'
                }>
                EditContact
              </NavLink>
              <NavLink
                to="add-contact"
                className={({ isActive }) =>
                  isActive ? 'active nav-link' : 'nav-link'
                }>
                AddContact
              </NavLink>
              <NavLink
                to="Contact"
                className={({ isActive }) =>
                  isActive ? 'active nav-link' : 'nav-link'
                }>
                Contact
              </NavLink>
            </Nav>
          )}

          <Nav>
            {!user && (
              <>
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
              </>
            )}

            {user && (
              <NavLink
                to="Home"
                onClick={logout}
                className={({ isActive }) =>
                  isActive ? 'active nav-link' : 'nav-link'
                }>
                Logout
              </NavLink>
            )}
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

export default MainNavbar
