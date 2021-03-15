import { Container, Form } from "react-bootstrap";

function FormRegister() {
  return (
    <div>
    <Container>
    <br></br>
      <Form>
        <Form.Group controlId="formGroupEmail">
          <Form.Label><h3>User Name*:</h3></Form.Label>
          <Form.Control type="text" placeholder="User Name" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label><h3>Password* :</h3></Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formGroupPassword">
          <Form.Label><h3>Confirm Password* :</h3></Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Form>
      </Container>
    </div>
  );
}

export default FormRegister;
