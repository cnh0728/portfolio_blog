import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
// import styles from "./navbar.module.css";

function MYNAVBAR(){
    return(
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Portfolio</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#profile">Profile</Nav.Link>
            <Nav.Link href="#project">Project</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
}

export default MYNAVBAR;