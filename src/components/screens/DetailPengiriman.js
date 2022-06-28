import React from "react";
import { Navbar, Container, Row, Button, Col } from "react-bootstrap";
import "../screens/style.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";

const DetailPengiriman = () => {
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
          Detail Pengiriman
        </h3>

        <Container>
          <form>
            <div class="form-group row">
              <label for="Pengirim" class="col-sm-2 col-form-label">
                Pengirim :
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  id="Pengirim"
                  value="Akmal"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="NoPengirim" class="col-sm-2 col-form-label">
                Nomer Pengirim :
              </label>
              <div class="col-sm-10">
                <input
                  type="tel"
                  readonly
                  class="form-control-plaintext"
                  id="NoPengirim"
                  value="0812-1234-1234"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="Penerima" class="col-sm-2 col-form-label">
                Penerima :
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  id="Penerima"
                  value="Daffa"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="NoPenerima" class="col-sm-2 col-form-label">
                Nomer Penerima :
              </label>
              <div class="col-sm-10">
                <input
                  type="tel"
                  readonly
                  class="form-control-plaintext"
                  id="NoPengirim"
                  value="0812-7777-1234"
                />
              </div>
            </div>
            <div class="form-group row">
              <label for="Penerima" class="col-sm-2 col-form-label">
                Alamat Tujuan :
              </label>
              <div class="col-sm-10">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  id="AlamatTujuan"
                  value="Sibox-Margocity Depok"
                />
              </div>
            </div>
          </form>
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
              Next
              <FaArrowRight style={{ marginLeft: "3rem" }} />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailPengiriman;
