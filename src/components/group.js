// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Row, Col } from "react-bootstrap";
import Olahraga from "../olahraga.jpg";
import { Link } from "react-router-dom";

function ListBuku() {
  const items = [
    {
      title: "Bisnis",
      image: "https://media.istockphoto.com/id/1190640204/id/vektor/ilustrasi-vektor-datar-it-bisnis-indonesia-manajemen-perusahaan-analisis-strategi-perusahaan.jpg?s=612x612&w=0&k=20&c=J0gUzSp6-56E_y92doFtIpbwZh8W5czNX3wPQiakN9A=",
      buttonText: "Go somewhere",
      buttonLink: "/bisnis",
      class: "classBisnis",
    },
    {
      title: "Teknologi",
      image: "https://media.istockphoto.com/id/1224475365/id/vektor/multitasking-bekerja-dalam-ilustrasi-vektor-datar-karakter-kantor-modern-konsep-abstrak.jpg?s=612x612&w=0&k=20&c=wGYbloCdHS90G01z6y_jF_0r4nHhe8W_Jq9U2Neex1Q=",
      buttonText: "Go somewhere",
      buttonLink: "/teknologi",
      class: "classTeknologi",
    },
    {
      title: "Kesehatan",
      image: "https://media.istockphoto.com/id/1413193119/id/vektor/wanita-melakukan-yoga.jpg?s=612x612&w=0&k=20&c=jjpuOVldDjub5oUPgXNndgkQ2lxR5JZIuI-BZQ2lviE=",
      buttonText: "Go somewhere",
      buttonLink: "/kesehatan",
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
        {/* style={{ display: "flex" }} */}
        <Row>
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
