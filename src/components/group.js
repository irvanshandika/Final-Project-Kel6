import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Olahraga from "../olahraga.jpg";
function ListBuku() {
  return (
    <div className="listbuku">
      <Card style={{ width: "18rem", display: "flex" }}>
        <Card.Body>
          <Card.Img variant="top" src={Olahraga} />
          <Card.Title>Olahraga</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>

        <Card.Body>
          <Card.Img variant="top" src={Olahraga} />
          <Card.Title>Olahraga</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>

        <Card.Body>
          <Card.Img variant="top" src={Olahraga} />
          <Card.Title>Olahraga</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>

        <Card.Body>
          <Card.Img variant="top" src={Olahraga} />
          <Card.Title>Olahraga</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>

        <Card.Body>
          <Card.Img variant="top" src={Olahraga} />
          <Card.Title>Olahraga</Card.Title>
          <Card.Text>Some quick example text to build on the card title and make up the bulk of the card's content.</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ListBuku;
