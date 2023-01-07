import Button from "react-bootstrap/Button";
import { Container, Row, Form } from "react-bootstrap";
import { useState } from "react";
function FeedBack() {
  const [loading, setLoading] = useState(false);
  const form = document.forms["messege-to-form"];
  const scriptURL = "https://script.google.com/macros/s/AKfycbxDhJp2Kya9dSPXVhpkStDYNhWums6uNMrB_ssrOeX1KkNg2B_3S0-7sFejJ9xMjqaj/exec";

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      fetch(scriptURL, {
        method: "POST",
        body: new FormData(form),
      }).then(() => {
        setLoading(false);
        form.reset();
        setTimeout(() => {
          alert("Pesan Terkirim");
        }, 1000);
      });
    } catch (error) {
      setLoading(false);
      console.log(error.messege);
    }
  };

  return (
    <div className="feedback">
      <Container>
        <Row className="d-flex justify-content-center">
          <Form>
            <div className="form-width">
              <h2>FeedBack</h2>
              <Form onSubmit={handleSubmit} name="messege-to-form" className="form">
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Nama Lengkap</Form.Label>
                  <Form.Control type="text" placeholder="Nama Lengkap" name="nama" />
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" name="email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label>Masukkan Pesan Disini :)</Form.Label>
                  <Form.Control as="textarea" rows={3} name="pesan" />
                </Form.Group>
                {loading ? <Button as="input" type="submit" value="loading ...." /> : <Button as="input" type="submit" value="Submit" />}
              </Form>
            </div>
          </Form>
        </Row>
      </Container>
    </div>
  );
}

export default FeedBack;
