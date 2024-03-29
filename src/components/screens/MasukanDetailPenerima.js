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
import InputPenerimaKeyboard from "../comp/InputPenerimaKeyboard";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

function disableRightClick() {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
}

function back() {
  window.location.href = "/MasukanDetailPengiriman";
}

function lanjut() {
  if (
    (Cookies.get("penerima") == "undefined" || Cookies.get("penerima") == "") ||
    (Cookies.get("notelppenerima") == "undefined" || Cookies.get("notelppenerima") == "")
  ) {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Silahkan Mengisi Data Terlebih Dahulu",
      showConfirmButton: false,
      // timer: 1500,
      // confirmButtonText: "close",
    });
  } else {
    window.location.href = "/MasukanDetailPenerimaLanjut";
    // console.log(Cookies.get("penerima"));
  }
}

const MasukanDetailPenerima = () => {
  disableRightClick();
  return (
    <div className="">
      <NavbarMenu2 />

      <body>
        <h3
          style={{
            textAlign: "center",
            marginTop: "3rem",
            marginBottom: "3rem",
          }}
        >
          Masukan Detail Penerima
        </h3>
        <Container>
          <InputPenerimaKeyboard />
        </Container>
      </body>
      {/* <Form style={{ fontSize: "25px" }}>
            <Form.Group controlId="formName" style={{ fontSize: "25px" }}>
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
              <FormProvinsi />
            </Row>
          </Form> */}
      {/* <Keyboard /> */}

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

      <div
        style={{
          width: "100vw",
          position: "absolute",
          bottom: "0",
          // marginBottom: "3rem",
          flex: "1",
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "50px",
          // backgroundColor: "yellow",
          // marginLeft: "1rem",
        }}
      >
        <div onClick={back}>
          <ButtonBack />
        </div>

        <div onClick={lanjut}>
          <ButtonLanjut />
        </div>
      </div>
    </div>
  );
};

export default MasukanDetailPenerima;
