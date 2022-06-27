import React, { useState } from "react";
import { Navbar, Container, Row, Button, Col, Form } from "react-bootstrap";
import "../screens/style.css";
import { FaArrowRight, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const MasukanDetailPengiriman = () => {
  const [value, setValue] = useState();
  return (
    <div className="">
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

      <body>
        <h3
          style={{
            textAlign: "center",
            marginTop: "5rem",
          }}
        >
          Masukan Detail Pengirim
        </h3>

        <Container>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Penerima :</Form.Label>
              <Form.Control type="text" placeholder="Masukan Nama Pengirim " />
            </Form.Group>
            <Form.Group
              controlId="form.TelpPengirim"
              style={{
                marginTop: "1.5rem",
              }}
            >
              <Form.Label>No Telpon Pengirim :</Form.Label>

              <PhoneInput
                placeholder="Masukan Nomer Telepon"
                countryCallingCodeEditable={false}
                defaultCountry="ID"
                value={value}
                onChange={setValue}
              />

              {/* <Form.Control
                type="tel"
                placeholder="No Telephone"
                pattern="+62 [7-9]{1}[0-9]{9}"
              /> */}
            </Form.Group>
            <Form.Group
              controlId="formAlamat"
              style={{
                marginTop: "1.5rem",
              }}
            >
              <Form.Label>Alamat :</Form.Label>
              <Form.Control type="text" readOnly />
            </Form.Group>
          </Form>
        </Container>
      </body>

      <Container
        style={{
          position: "absolute",
          bottom: "0",
          marginBottom: "3rem",
        }}
      >
        <Row>
          <Col>
            <Link to="/">
              <Button
                variant="primary"
                size="lg"
                style={{
                  width: "5rem",
                  borderRadius: "50px",
                  backgroundColor: "#CD2028",
                  borderColor: "#CD2028",
                }}
              >
                <FaHome />
              </Button>
            </Link>
          </Col>
          <Col>
            <Button
              href="/MasukanDetailPenerima"
              variant="primary"
              size="lg"
              style={{
                width: "10rem",
                // marginLeft: "30rem",
                // // marginRight: "-50rem",
                borderRadius: "50px",
                backgroundColor: "#CD2028",
                borderColor: "#CD2028",
              }}
            >
              Next
              <FaArrowRight style={{ marginLeft: "3rem" }} />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MasukanDetailPengiriman;
