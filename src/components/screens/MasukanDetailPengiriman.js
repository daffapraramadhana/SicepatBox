import React, { useState } from "react";
import { Navbar, Container, Row, Button, Col, Form } from "react-bootstrap";
import "../screens/style.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import NavbarMenu from "../comp/NavbarMenu";
import ButtonBack from "../comp/ButtonBack";
import ButtonLanjut from "../comp/ButtonLanjut";

const MasukanDetailPengiriman = () => {
  const [value, setValue] = useState();
  return (
    <div className="">
      <NavbarMenu />
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
          <Form style={{ fontSize: "25px" }}>
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
            </Form.Group>
            <Form.Group
              controlId="formAlamat"
              style={{
                marginTop: "1.5rem",
              }}
            >
              <Form.Label>Alamat :</Form.Label>
              <Form.Control
                type="text"
                value="Sibox - Suppermall Karawaci"
                readOnly
              />
            </Form.Group>
          </Form>
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
            <Link to="/PelangganKirimScanInput">
              <ButtonBack />
            </Link>
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
            ></Container>
          </Col>
          <Col
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Link to="/MasukanDetailPenerima">
              <ButtonLanjut />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MasukanDetailPengiriman;
