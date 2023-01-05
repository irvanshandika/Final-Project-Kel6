import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function AboutMe() {
  return (
    <>
      <Container>
        <div className="aboutme">
          <h3>Tentang Kami</h3>
        </div>
        <Row className="team">
          <Col>
            <p>Perpustakaan ini dibuat agar semua</p>
            <p>orang dapat mengakses semua buku yang ingin dicari</p>
            <p>Dibaca langsung ataupun disimpan</p>
          </Col>
          <Col>
            <a href="" className="team text-decoration-none">
              <p>Our Team</p>
            </a>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default AboutMe;
