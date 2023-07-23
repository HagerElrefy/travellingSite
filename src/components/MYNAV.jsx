import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export function MYNAV(){
    return(
        <>
        <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
            <Navbar.Brand href="#home"><i class="fa-brands fa-fly"></i>  TRAVELLING</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="contactUS">Contact US</Nav.Link>
                <Nav.Link href="about">About</Nav.Link>
                <Nav.Link href="Countries">Countries</Nav.Link>
            </Nav>
            </Navbar.Collapse>
      </Container>

    </Navbar>
   
        </>
    );
}