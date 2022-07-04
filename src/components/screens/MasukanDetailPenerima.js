import React, { useState, Option } from "react";
import { Navbar, Container, Row, Button, Col, Form } from "react-bootstrap";
import "../screens/style.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Select from "react-select";
import provinsi from "../Json/Provinsi";

const options = [
  { value: "kuningan", label: "Sibox-Kuningan City" },
  { value: "karawaci", label: "Sibox-Lippo Karawaci" },
  { value: "depok", label: "Sibox-Margocity" },
];

const MasukanDetailPenerima = () => {
  const [value, setValue] = useState();
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
        <h3
          style={{
            textAlign: "center",
            marginTop: "5rem",
          }}
        >
          Masukan Detail Penerima
        </h3>

        <Container>
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
              <Col>
                <Form.Group
                  controlId="formProvinsi"
                  style={{
                    marginTop: "1.5rem",
                  }}
                >
                  <Form.Label>Provinsi :</Form.Label>
                  <Select>
                    <Option>1</Option>
                  </Select>
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  controlId="formKota"
                  style={{
                    marginTop: "1.5rem",
                  }}
                >
                  <Form.Label>Kota/kabupaten :</Form.Label>
                  <Select options={options} />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  controlId="formKecamatan"
                  style={{
                    marginTop: "1.5rem",
                  }}
                >
                  <Form.Label>Kecamatan :</Form.Label>
                  <Select options={options} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  controlId="formProvinsi"
                  style={{
                    marginTop: "1.5rem",
                  }}
                >
                  <Form.Label>Kodepos :</Form.Label>
                  <Select options={options} />
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Container>
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
                marginRight: "-10rem",
              }}
            >
              Lanjut
              <FaArrowRight style={{ marginLeft: "3rem" }} />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MasukanDetailPenerima;
