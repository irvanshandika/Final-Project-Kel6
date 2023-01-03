import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Olahraga from "../olahraga.jpg";
function ListBuku() {
  const items = [
    {
      title: "Bisnis",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: "https://1.bp.blogspot.com/-HeHlbwYO0Qo/X_U_vpeVAaI/AAAAAAAAAEI/lzTDAOqjJZYhhEWlhWXqHToNh71ll0h5wCLcBGAsYHQ/w320-h180/Communication-skills-in-the-workplace.png",
      buttonText: "Go somewhere",
    },
    {
      title: "Teknologi",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: "https://1.bp.blogspot.com/-HeHlbwYO0Qo/X_U_vpeVAaI/AAAAAAAAAEI/lzTDAOqjJZYhhEWlhWXqHToNh71ll0h5wCLcBGAsYHQ/w320-h180/Communication-skills-in-the-workplace.png",
      buttonText: "Go somewhere",
    },
    {
      title: "Perkebunan",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: Olahraga,
      buttonText: "Go somewhere",
    },
    {
      title: "Olahraga",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: Olahraga,
      buttonText: "Go somewhere",
    },
    {
      title: "Olahraga",
      description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
      image: Olahraga,
      buttonText: "Go somewhere",
    },
  ];
  return (
    <div className="listbuku">
      <Card style={{ width: "50rem", display: "flex" }}>
        <Row style={{ display: "flex" }}>
          {items.map((item) => {
            return (
              <Col md={6}>
                <Card.Body className="card1">
                  <Card.Img variant="top" src={item.image} />
                  <Card.Title>{item.title}</Card.Title>
                  <Card.Text>{item.description}</Card.Text>
                  <Button variant="primary">{item.buttonText}</Button>
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
