import React from "react";
import Figure from "react-bootstrap/Figure";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AOS from "aos";
import "aos/dist/aos.css";
import Foto1 from "../dhuta.jpg";
import Foto2 from "../dion.jpg";
import Foto3 from "../saya.jpg";
import Foto4 from "../daffa.jpg";
import Foto5 from "../taqiyuddin.jpg";
import Foto6 from "../annisa.jpg";
import User from "../user.png";

AOS.init();

function TeamPage() {
  return (
    <div className="teampage" id="teampage">
      <h1>Our Team</h1>
      <Container>
        <Row>
          <Col xs={12} md={4}>
            <div data-aos="zoom-in">
              <Figure>
                <Figure.Image className="border1" width={200} alt="Muhammad Irvan Shandika" src={Foto3} />
                <Figure.Caption>
                  <h4>Muhammad Irvan Shandika</h4>
                  <p>Frontend Developer</p>
                </Figure.Caption>
              </Figure>
            </div>
          </Col>

          <Col xs={12} md={4}>
            <div data-aos="zoom-in">
              <Figure>
                <Figure.Image className="border2" width={200} alt="Dionisius Rizky Pramusinto" src={Foto2} />
                <Figure.Caption>
                  <h4>Dionisius Rizky Pramusinto</h4>
                  <p>UI/UX Design</p>
                </Figure.Caption>
              </Figure>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div data-aos="zoom-in">
              <Figure>
                <Figure.Image className="border3" width={200} height={300} alt="Annisa Damayanti" src={Foto6} />
                <Figure.Caption>
                  <h4>Annisa Damayanti</h4>
                  <p>Support Team</p>
                </Figure.Caption>
              </Figure>
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={4}>
            <div data-aos="zoom-in">
              <Figure>
                <Figure.Image className="border4" width={200} alt="Dhuta Azikkira Subroto" src={Foto1} />
                <Figure.Caption>
                  <h4>Dhuta Azikkira Subroto</h4>
                  <p>Backend Developer</p>
                </Figure.Caption>
              </Figure>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div data-aos="zoom-in">
              <Figure>
                <Figure.Image className="border5" width={200} alt="Naufal Rabbani" src={User} />
                <Figure.Caption>
                  <h4>Naufal Rabbani</h4>
                  <p>UI/UX Design</p>
                </Figure.Caption>
              </Figure>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div data-aos="zoom-in">
              <Figure>
                <Figure.Image className="border6" width={200} alt="Muhammad Taqiyuddin" src={Foto5} />
                <Figure.Caption>
                  <h4>Muhammad Taqiyuddin</h4>
                  <p>Frontend Developer</p>
                </Figure.Caption>
              </Figure>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div data-aos="zoom-in">
              <Figure className="figure7">
                <Figure.Image className="border7" width={200} alt="Muhammad Daffa Rizqi Syaputra" src={Foto4} />
                <Figure.Caption>
                  <h4>Muhammad Daffa Rizqi Syaputra</h4>
                  <p>UI/UX Design</p>
                </Figure.Caption>
              </Figure>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default TeamPage;
