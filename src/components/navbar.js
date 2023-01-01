import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavigasiBar() {
  return (
    <>
      <div className="container-fluid">
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img src="https://amikom.ac.id/public/docs/2016/logo_amikom_full_color.png" className="logo-amikom"></img> PERPUSTAKAAN DIGITAL
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Pengaturan</Nav.Link>
                <Nav.Link href="#link">Login</Nav.Link>
                <NavDropdown title="Daftar Buku" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Bisnis</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Teknologi</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Perkebunan</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Olahraga</NavDropdown.Item>
                  {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavigasiBar;
