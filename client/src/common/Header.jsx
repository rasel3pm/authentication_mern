import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <Navbar bg="light" className="shadow" expand="lg">
      <Container>
        <NavLink className="text-decoration-none fs-2 fw-semibold" to="/">
          <Navbar.Brand>Task Manager</Navbar.Brand>
        </NavLink>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <NavLink
              className="mx-2 text-black fw-normal text-decoration-none"
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="mx-2 text-black fw-normal text-decoration-none"
              to="/add-task"
            >
              Add Task
            </NavLink>
            <NavLink
              className="mx-2 text-black fw-normal text-decoration-none"
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              className="mx-2 text-black fw-normal text-decoration-none"
              to="/user-list"
            >
              User List
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
