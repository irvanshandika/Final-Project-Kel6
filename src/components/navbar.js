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
            <Nav className="me-auto" style={{ display: "flex", alignItems: "center ", justifyContent: "center" }}>
              <Link to={"/"} style={{ textDecoration: "none", color: "gray" }}>
                Home
              </Link>
              <NavDropdown title="Daftar Buku" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link className="navBisnis" style={{ textDecoration: "none", color: "black" }} to={"/bisnis"}>
                    Bisnis
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="navTeknologi" style={{ textDecoration: "none", color: "black" }} to={"/teknologi"}>
                    Teknologi
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="navKesehatan" style={{ textDecoration: "none", color: "black" }} to={"/kesehatan"}>
                    Kesehatan
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link className="navOlahraga" style={{ textDecoration: "none", color: "black" }} to={"/olahraga"}>
                    Olahraga
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>

            {/* <Nav.Link href="#link" className="login"> */}
            {/* </Nav.Link> */}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigasiBar;
