import React from "react";
import { Navbar, Container, Card, Row, Col } from "react-bootstrap";
import "../screens/style.css";
import ambil from "../image/ambil.svg";
import kirim from "../image/kirim.svg";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div>
      <Navbar class="navbar navbar-light">
        <Container
          style={{
            paddingBottom: "10px",
          }}
        >
          <Navbar.Brand className="logo">
            <p className="text">Sibox</p>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <Container className="body">
        <Row>
          <Col md={4}>
            <Link to="/PelangganKirimScanInput">
              <Card
                class="card-block stretched-link text-decoration-none"
                style={{ width: "30rem", marginTop: "2rem" }}
              >
                <Card.Img src={ambil} alt="ambil" className="img" />
                <Card.Body>
                  <Card.ImgOverlay>
                    <Card.Text
                      class="fs-3"
                      href=""
                      style={{
                        marginTop: "30px",
                        marginLeft: "50px",
                        fontWeight: "normal",
                        color: "black",
                      }}
                    >
                      AMBIL
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card.Body>
              </Card>
            </Link>

            <Link to="/PelangganKirimScanInput">
              <Card
                style={{
                  width: "30rem",
                  marginTop: "2rem",
                  // marginBottom: "2rem",
                  paddingBottom: "2rem",
                }}
              >
                <Card.Img src={kirim} alt="kirim" className="img-ambil" />
                <Card.Body>
                  <Card.ImgOverlay>
                    <Card.Text
                      class="fs-3"
                      style={{
                        marginTop: "30px",
                        marginLeft: "50px",
                        fontWeight: "normal",
                        color: "black",
                      }}
                    >
                      KIRIM
                    </Card.Text>
                  </Card.ImgOverlay>
                </Card.Body>
              </Card>
            </Link>
          </Col>

          <Col md={{ span: 2, offset: 2 }}>
            <Card style={{ width: "30rem", marginTop: "2rem" }}>
              <Card.Body>
                <Card.Title>Kurir Section</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
            <Card
              style={{ width: "30rem", marginTop: "2rem", height: "26rem" }}
            >
              <Card.Body>
                <Card.Title>Ekstra Section</Card.Title>
                <Card.Text></Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LandingPage;
