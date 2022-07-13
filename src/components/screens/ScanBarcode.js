import React from "react";
import { Navbar, Container, Row, Button, Col, Image } from "react-bootstrap";
import "../screens/style.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import qris from "../image/qris.svg";
import ButtonBack from "../comp/ButtonBack";
import ButtonLanjut from "../comp/ButtonLanjut";
import NavbarMenu2 from "../comp/NavbarMenu2";

const ScanBarcode = () => {
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
          Silahkan Scan Qris Untuk Bayar
        </h3>

        <Container
          style={{
            textAlign: "center",
            marginTop: "5rem",
          }}
        >
          <Image
            src={qris}
            style={{
              width: "350px",
            }}
          />
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
            <Link to="/DetailPengiriman">
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
            <Link to="/LabelPrint">
              <ButtonLanjut />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ScanBarcode;
