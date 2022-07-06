import React from "react";
import { Navbar, Container, Row, Button, Col } from "react-bootstrap";
import "../screens/style.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import NavbarMenu from "../comp/NavbarMenu";
import ButtonBack from "../comp/ButtonBack";
import ButtonLanjut from "../comp/ButtonLanjut";

const DetailPengirimanBarcode = () => {
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
          Detail Pengiriman
        </h3>

        <Container
          style={{
            marginTop: "5rem",
            // backgroundColor: "yellow",
          }}
        >
          <form
            style={{
              fontSize: "30px",
              // backgroundColor: "blue",
              justifyContent: "center",
              marginLeft: "20rem",
            }}
          >
            <div class="form-group row">
              <label for="Pengirim" class="col-sm-5 col-form-label">
                Pengirim :
              </label>
              <div class="col-sm-7">
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
              <label for="NoPengirim" class="col-sm-5 col-form-label">
                Nomer Pengirim :
              </label>
              <div class="col-sm-7">
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
              <label for="Penerima" class="col-sm-5 col-form-label">
                Penerima :
              </label>
              <div class="col-sm-7">
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
              <label for="NoPenerima" class="col-sm-5 col-form-label">
                Nomer Penerima :
              </label>
              <div class="col-sm-5">
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
              <label for="Penerima" class="col-sm-5 col-form-label">
                Alamat Tujuan :
              </label>
              <div class="col-sm-7">
                <input
                  type="text"
                  readonly
                  class="form-control-plaintext"
                  id="AlamatTujuan"
                  value="Karawaci, Tangerang"
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
            <Link to="/PelangganKirimScaninput">
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
            <Link to="/LokerTerbukaBarcode">
              <ButtonLanjut />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DetailPengirimanBarcode;
