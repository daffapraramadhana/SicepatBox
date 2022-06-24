import React from "react";
import { Navbar, Container } from "react-bootstrap";
import "../screens/style.css";
// import PinField from "../comp/PinFields.js";
import PinField from "react-pin-field";

const PelangganKirimScanInput = () => {
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
          SCAN BARCODE ATAU INPUT KODE PEMESANAN
        </h3>

        <div className="pin">
          <PinField
            style={{
              backgroundColor: "#ebeffc",
              borderRadius: "15px",
              fontSize: "2rem",
              textAlign: "center",
              width: "4.5rem",
              margin: "0.25rem",
              height: "4rem",
              borderColor: "#ebeffc",
              outline: "none",
            }}
          />
        </div>
      </body>
    </div>
  );
};

export default PelangganKirimScanInput;
