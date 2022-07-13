import React, { useState, Option } from "react";
import { Navbar, Container, Row, Button, Col, Form } from "react-bootstrap";
import "../screens/style.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Select from "react-select";
import provinsi from "../Json/Provinsi";
import ButtonBack from "../comp/ButtonBack";
import ButtonLanjut from "../comp/ButtonLanjut";
import NavbarMenu2 from "../comp/NavbarMenu2";
import FormProvinsi from "../comp/FormProvinsi";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const MasukanDetailPenerima = () => {
  const [value, setValue] = useState();
  return (
    <div className="">
      <NavbarMenu2 />

      <body>
        <h3
          style={{
            textAlign: "center",
            marginTop: "5rem",
          }}
        >
          Masukan Detail Penerima
        </h3>

        <Container className="scrollable-div">
          <Form style={{ fontSize: "20px" }}>
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
              <Form.Label>No Telpon Penerima :</Form.Label>

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
                controlId="formAlamat"
                as="textArea"
                rows={3}
                placeholder="Masukan Alamat Lengkap Tujuan"
              />
            </Form.Group>
            <Row>
              {/* <Form.Group
                  controlId="formProvinsi"
                  style={{
                    marginTop: "1.5rem",
                  }}
                >
                  <Form.Label>Provinsi :</Form.Label>
                  <select>
                    <option selected disabled="true">
                      Pilih Provinsi
                    </option>
                    {provinsi.namaprovinsi.map((result) => (
                      <option value={result.id}>{result.nama}</option>
                    ))}
                  </select> 
                </Form.Group> */}
              <FormProvinsi />
            </Row>
          </Form>
        </Container>
        <Keyboard />
      </body>

      {/* <Container
        style={{
          position: "absolute",
          bottom: "0",
          marginBottom: "3rem",
        }}
      >
        <Row>
          <Col>
            <Link to="/MasukanDetailPengiriman">
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
                <FaArrowLeft
                  style={{
                    marginBottom: "5px",
                  }}
                />
              </Button>
            </Link>
          </Col>
          <Col>
            <Button
              href="/MasukanDimensi"
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
      </Container> */}

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
            <Link to="/MasukanDetailPengiriman">
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
            <Link to="/MasukanDimensi">
              <ButtonLanjut />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MasukanDetailPenerima;
