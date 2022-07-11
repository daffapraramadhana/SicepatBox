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
import axios from "axios";
import Swal from "sweetalert2";

const InputPinAmbil = () => {
  const url = "http://localhost:3005/service/take-package";
  const [code, setCode] = useState("");
  const [completed, setCompleted] = useState(false);

  if (completed) {
    axios
      .post(url, {
        validate_code: code,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.response.code == 200) {
          window.location.href = "/LokerTerbukaAmbil";
        } else {
          Swal.fire({
            text: "Kode Yang Anda Masukan Salah",
            icon: "error",
            timer: 1000,
          });
          setTimeout(function () {
            window.location.href = "/InputPinAmbil"; //will redirect to your blog page (an ex: blog.html)
          }, 2000);
        }
      });
  }

  function kirim() {
    console.log(code);
    // preventDefault();
    // console.log(input);
    // axios
    //   .post(url, {
    //     validate_code: code,
    //   })
    //   .then((res) => {
    //     console.log(res.data);
    //     if (res.data.response.code == 200) {
    //       window.location.href = "/LokerTerbukaKurir";
    //     } else {
    //       Swal.fire({
    //         text: "Kode Yang Anda Masukan Salah",
    //         icon: "error",
    //       });
    //     }
    //   });
  }

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
        <div>{code}</div>
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
