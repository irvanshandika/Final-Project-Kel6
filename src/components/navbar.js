import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavLogo from "../fav.ico";
import { Link } from "react-router-dom";

function NavigasiBar() {
  return (
    <>
      <Navbar className="navbar" fixed="top" bg="light" expand="lg">
        <Container>
          <div className="mr-auto">
            <Navbar.Brand className="ml-auto">
              <img src={NavLogo} className="logo-amikom"></img> PERPUSTAKAAN DIGITAL
            </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav justify-content-end">
            <Nav className="me-auto" style={{ display: "flex", alignItems: "center " }}>
              <Link to={"/"} style={{ textDecoration: "none", color: "gray" }}>
                Home
              </Link>
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
            <Link className="login" to={"/login"}>
              Login
            </Link>
            {/* <Nav.Link href="#link" className="login"> */}
            {/* </Nav.Link> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigasiBar;
