import React, { useState } from "react";
import { Navbar, Container, Row, Button, Col } from "react-bootstrap";
import "../screens/style.css";
// import PinField from "../comp/PinFields.js";
import PinField from "react-pin-field";
import { FaHome, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import ButtonBack from "../comp/ButtonBack";
import ButtonLanjut from "../comp/ButtonLanjut";
import NavbarMenu from "../comp/NavbarMenu";

const InputKodeKurir = () => {
  const [code, setCode] = useState("");
  const [completed, setCompleted] = useState(false);
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
          SCAN BARCODE ATAU INPUT KODE PEMESANAN
        </h3>

        <div
          style={{
            textAlign: "center",
          }}
        >
          <input
            type="text"
            style={{
              width: "50rem",
              height: "6rem",
              borderRadius: "50px",
              marginTop: "5rem",
              textAlign: "center",
              fontSize: "30px",
              backgroundColor: "#CED4D3CC",
            }}
            placeholder="Masukan kode Pemesanan"
          />
        </div>
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
            <Link to="/DashboardKurir">
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
            <Link to="/DetailPengirimanKurir">
              <ButtonLanjut />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InputKodeKurir;
