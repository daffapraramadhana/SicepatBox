import React, { useState } from "react";
import { Navbar, Container, Row, Button, Col } from "react-bootstrap";
import "../screens/style.css";
// import PinField from "../comp/PinFields.js";
import PinField from "react-pin-field";
import { FaHome, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import ButtonBack from "../comp/ButtonBack";
import ButtonLanjut from "../comp/ButtonLanjut";
import NavbarMenu from "../comp/NavbarMenu";
import ButtonHome from "../comp/ButtonHome";

const InputPinAmbil = () => {
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

        <div className="pin">
          <PinField
            className="field-a"
            length={6}
            onChange={setCode}
            validate={/^[0-9]$/}
            onComplete={() => setCompleted(true)}
            style={{
              backgroundColor: "#ebeffc",
              borderRadius: "50px",
              fontSize: "2rem",
              textAlign: "center",
              width: "6rem",
              margin: "0.25rem",
              height: "5rem",
              borderColor: "#ebeffc",
              outline: "none",
            }}
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
            <Link to="/">
              <ButtonHome />
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
            <Link to="/LokerTerbukaAmbil">
              <ButtonLanjut />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InputPinAmbil;
