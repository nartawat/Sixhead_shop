import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import {
  Carousel,
  Container,
  Row,
  Col,
  Card,
  Button,
  Pagination,
} from "react-bootstrap";


function App() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  let active = 1;
  let items = [];
  for (let number = 1; number <= 6; number++) {
    items.push(
      <Pagination.Item key={number} active={number === active}>
        {number}
      </Pagination.Item>
    );
  }
  return (
    <div className="App">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            style={{ width: "auto", height: 400 }}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Welcome to SixHead_Shop</h3>
            <p>Street Fasion and warm jacket</p>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            style={{ width: "auto", height: 400 }}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1604898426702-4b4f1c5e973a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1984&q=80"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ width: "auto", height: 400 }}
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* =========================== GridItem ==========================*/}
      <Container className="contain">
        <Row xs={1} md={2} lg={3} xl={3} className="Row">
          <Col xl={{ span: 4 }}>
            <Card>
              <Card.Img
                style={{ width: "auto", height: 250 }}
                variant="top"
                src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8dCUyMHNoaXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title className="CardTitle">T-Shirt </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">BUY</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={{ span: 4 }}>
            <Card>
              <Card.Img
                style={{ width: "auto", height: 250 }}
                variant="top"
                src="https://images.unsplash.com/photo-1523380677598-64d85d015339?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">BUY</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={{ span: 4 }}>
            <Card>
              <Card.Img
                style={{ width: "auto", height: 250 }}
                variant="top"
                src="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">BUY</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row xs={1} md={2} lg={3} xl={3}>
          <Col xl={{ span: 4 }}>
            <Card>
              <Card.Img
                style={{ width: "auto", height: 250 }}
                variant="top"
                src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8dCUyMHNoaXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title className="CardTitle">T-Shirt </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">BUY</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={{ span: 4 }}>
            <Card>
              <Card.Img
                style={{ width: "auto", height: 250 }}
                variant="top"
                src="https://images.unsplash.com/photo-1523380677598-64d85d015339?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">BUY</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={{ span: 4 }}>
            <Card>
              <Card.Img
                style={{ width: "auto", height: 250 }}
                variant="top"
                src="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">BUY</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row xs={1} md={2} lg={3} xl={3} className="Row">
          <Col xl={{ span: 4 }}>
            <Card>
              <Card.Img
                style={{ width: "auto", height: 250 }}
                variant="top"
                src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8dCUyMHNoaXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <Card.Body>
                <Card.Title className="CardTitle">T-Shirt </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">BUY</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={{ span: 4 }}>
            <Card>
              <Card.Img
                style={{ width: "auto", height: 250 }}
                variant="top"
                src="https://images.unsplash.com/photo-1523380677598-64d85d015339?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">BUY</Button>
              </Card.Body>
            </Card>
          </Col>

          <Col xl={{ span: 4 }}>
            <Card>
              <Card.Img
                style={{ width: "auto", height: 250 }}
                variant="top"
                src="https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">BUY</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Pagination className="Pagin"> {items}</Pagination>
      </Container>
      <Card className="text-center">
        <Card.Header>Make By : Nartawat </Card.Header>
        <Card.Body>
          <Card.Title>Special title treatment</Card.Title>
          <Card.Text>
            With supporting text below as a natural lead-in to additional
            content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
        <Card.Footer className="text-muted">Thank you very mcuh</Card.Footer>
      </Card>
    </div>
  );
}

export default App;
