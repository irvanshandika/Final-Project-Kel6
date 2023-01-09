import React from "react";
import Mail from "../mail.png";
import Support from "../support.png";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FeedBack() {
  return (
    <>
      <div className="feedback">
        <p>
          Jika Ada Sebuah Kesalahan Dan Bug Dapat
          <br />
          Hubungi Kami
        </p>
        <Row>
          <Col>
            <img src={Support} width="45" /> <p>(+62) 8123456789098</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <img src={Mail} width="45" />
            <p>shandikamuhammadirvan@students.amikom.ac.id</p>
          </Col>
        </Row>
      </div>
    </>
  );
}
export default FeedBack;
