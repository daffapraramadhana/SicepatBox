import React from "react";
import { Navbar, Container, Row, Button, Col, Image } from "react-bootstrap";
import "../screens/style.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import printlabel from "../image/printlabel.svg";
import box from "../image/box.svg";
import { ImEnter } from "react-icons/im";
import checkbox from "../image/checkbox.svg";
import ModalTerimaKasih from "../comp/ModalTerimaKasih";

const LokerTerbukaBarcode = () => {
  return (
    <div className="">
      <Navbar class="navbar navbar-light">
        <Container>
          <Navbar.Brand className="logo">
            <p className="text">Sibox</p>
          </Navbar.Brand>
        </Container>
      </Navbar>

      <body>
        <Container style={{ marginTop: "7rem" }}>
          <Row>
            <Col>
              <Container>
                {" "}
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "2rem",
                    marginBottom: "3rem",
                  }}
                >
                  1
                </h3>
                <Container
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Image
                    src={box}
                    style={{
                      width: "120px",
                    }}
                  />
                </Container>
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "2.85rem",
                  }}
                >
                  Loker Nomer 3 Telah Terbuka Silahkan Masukan paket Anda
                </h3>
              </Container>
            </Col>
            <Col>
              <Container>
                {" "}
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "2rem",
                    marginBottom: "3rem",
                  }}
                >
                  2
                </h3>
                <Container
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Image
                    src={checkbox}
                    style={{
                      width: "200px",
                    }}
                  />
                </Container>
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "3rem",
                  }}
                >
                  Jangan Lupa Untuk Menutup Loker
                </h3>
              </Container>
            </Col>
          </Row>
        </Container>
      </body>

      <Container
        fluid
        style={{
          position: "absolute",
          bottom: "0",
          marginBottom: "3rem",
          flex: "1",
        }}
      >
        <Row
          style={{
            flex: "1",
          }}
        >
          <Col
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {/* <Link to="/DetailPengirimanBarcode">
              <Button
                variant="primary"
                size="lg"
                style={{
                  width: "5rem",
                  borderRadius: "50px",
                  backgroundColor: "#CD2028",
                  borderColor: "#CD2028",
                  marginLeft: "-10rem",
                }}
              >
                <FaArrowLeft
                  style={{
                    marginBottom: "5px",
                  }}
                />
              </Button>
            </Link> */}
          </Col>

          <Col
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Container
              style={{
                backgroundColor: "none",
                height: "3rem",
              }}
            >
              {" "}
              <Link to="">
                <Button
                  variant="primary"
                  size="lg"
                  style={{
                    width: "20rem",
                    borderRadius: "50px",
                    backgroundColor: "#ffff",
                    borderColor: "#CD2028",
                    color: "#CD2028",

                    //   marginLeft: "-10rem",
                  }}
                >
                  Buka Loker Kembali
                  <ImEnter
                    style={{
                      marginLeft: "3rem",
                    }}
                  />
                </Button>
              </Link>
            </Container>
          </Col>
          <Col
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {/* <Button
              href="/TerimaKasih"
              variant="primary"
              size="lg"
              style={{
                width: "10rem",
                // marginLeft: "30rem",
                // // marginRight: "-50rem",
                borderRadius: "50px",
                backgroundColor: "#CD2028",
                borderColor: "#CD2028",
                marginRight: "-10rem",
              }}
            >
              Next
              <FaArrowRight style={{ marginLeft: "3rem" }} />
            </Button> */}
            <ModalTerimaKasih />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LokerTerbukaBarcode;
