import React, { useState, useRef } from "react";
import { Navbar, Container, Row, Button, Col } from "react-bootstrap";
import "../screens/style.css";
import { FaHome, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavbarMenu from "../comp/NavbarMenu";
import ButtonHome from "../comp/ButtonHome";
import ButtonBelumPesan from "../comp/ButtonBelumPesan";
import ButtonLanjut from "../comp/ButtonLanjut";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

const PelangganKirimScanInput = () => {
  // setTimeout(function () {
  //   window.location.href = "/";
  // }, 5000);
  const [input, setInput] = useState("");
  const [layout, setLayout] = useState("default");
  const keyboard = useRef();

  const onChange = (input) => {
    setInput(input);
    console.log("Input changed", input);
  };

  const handleShift = () => {
    const newLayoutName = layout === "default" ? "shift" : "default";
    setLayout(newLayoutName);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = (event) => {
    const input = event.target.value;
    setInput(input);
    keyboard.current.setInput(input);
  };

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

        {/* <div className="pin">
          <PinField
            className="field-a"
            onChange={setCode}
            validate={/^[0-9]$/}
            onComplete={() => setCompleted(true)}
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
        </div> */}
        <div
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <input
            type="text"
            value={input}
            onChange={onChangeInput}
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
          <Keyboard
            keyboardRef={(r) => (keyboard.current = r)}
            layoutName={layout}
            onChange={onChange}
            onKeyPress={onKeyPress}
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
            <Link
              to="/MasukanDetailPengiriman"
              style={{
                backgroundColor: "none",
                height: "3rem",
              }}
            >
              <ButtonBelumPesan />
            </Link>
          </Col>
          <Col
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Link to="/DetailPengirimanBarcode">
              <ButtonLanjut />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PelangganKirimScanInput;
