import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Olahraga from "../olahraga.jpg";
import { Link } from "react-router-dom";

function ListBuku() {
  const items = [
    {
      title: "Bisnis",
      image: "https://1.bp.blogspot.com/-HeHlbwYO0Qo/X_U_vpeVAaI/AAAAAAAAAEI/lzTDAOqjJZYhhEWlhWXqHToNh71ll0h5wCLcBGAsYHQ/w320-h180/Communication-skills-in-the-workplace.png",
      buttonText: "Go somewhere",
      buttonLink: "/bisnis",
      class: "classBisnis",
    },
    {
      title: "Teknologi",
      image: "https://media.istockphoto.com/id/1276438491/id/vektor/ilustrasi-pendidikan-online-dengan-freelancer-muda-atau-belajar-siswa-di-rumah-menggunakan.jpg?s=612x612&w=0&k=20&c=n-M5K0hVvYloLE8S9T-pRyD-Mmk8jI7-SfuagtrarHQ=",
      buttonText: "Go somewhere",
      buttonLink: "/teknologi",
      class: "classTeknologi",
    },
    {
      title: "Perkebunan",
      image: "https://media.istockphoto.com/id/1282855626/id/vektor/seorang-pemuda-dengan-tanaman-sayuran-rumah-kaca-tema-taman-ilustrasi-vektor-pada-latar.jpg?s=612x612&w=0&k=20&c=LeTUEhq3aJFgqPhVo9i7xFAclJ11zUE-auFRLxi6SRg=",
      buttonText: "Go somewhere",
      buttonLink: "/perkebunan",
      class: "classPerkebunan",
    },
    {
      title: "Olahraga",
      image: Olahraga,
      buttonText: "Go somewhere",
      buttonLink: "/olahraga",
      class: "classOlahraga",
    },
  ];
  return (
    <div className="listbuku">
      <Card style={{ width: "50rem", display: "flex", backgroundColor: "transparent" }}>
        <Row style={{ display: "flex" }}>
          {items.map((item) => {
            return (
              <Col md={6}>
                <Card.Body className="card1">
                  <Card.Img className={`${item.class} images`} variant="top" src={item.image} />
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  {/* <Button variant="primary">{item.buttonText}</Button> */}
                  <Link className="btn btn-primary" to={item.buttonLink}>
                    {item.buttonText}
                  </Link>
                </Card.Body>
              </Col>
            );
          })}
          {/* <Col md={6}>
            <Card.Body className="card1">
              <Card.Img variant="top" src="https://1.bp.blogspot.com/-HeHlbwYO0Qo/X_U_vpeVAaI/AAAAAAAAAEI/lzTDAOqjJZYhhEWlhWXqHToNh71ll0h5wCLcBGAsYHQ/w320-h180/Communication-skills-in-the-workplace.png" />
              <Card.Title>Bisnis</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Col>
          <Col md={6}>
            <Card.Body className="card1">
              <Card.Img variant="top" src={Olahraga} />
              <Card.Title>Teknologi</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Col>
          <Col md={6}>
            <Card.Body className="card1">
              <Card.Img variant="top" src={Olahraga} />
              <Card.Title>Perkebunan</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Col>
          <Col md={6}>
            <Card.Body className="card1">
              <Card.Img variant="top" src={Olahraga} />
              <Card.Title>Olahraga</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Col>
          <Col md={6}>
            <Card.Body className="card1">
              <Card.Img variant="top" src={Olahraga} />
              <Card.Title>Olahraga</Card.Title>
              <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Col> */}
        </Row>
      </Card>
    </div>
  );
}

export default ListBuku;
