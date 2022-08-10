import React, { useState } from "react";
import { Navbar, Container, Row, Button, Col, Form } from "react-bootstrap";
import "../screens/style.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import NavbarMenu2 from "../comp/NavbarMenu2";
import ButtonBack from "../comp/ButtonBack";
import ButtonLanjut from "../comp/ButtonLanjut";
import InputPengirimKeyboard from "../comp/InputPengirimKeyboard";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import axios from "axios";
import "animate.css";

function disableRightClick() {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
}

function lanjut() {
  if (
    Cookies.get("pengirim") == "" ||
    Cookies.get("notelppengirim") == "undefined" ||
    ""
  ) {
    Swal.fire({
      position: "center",
      icon: "warning",
      title: "Silahkan Mengisi Data Terlebih Dahulu",
      // backdrop: "transparent",
      // showClass: {
      //   popup: "animate__animated animate__fadeInDown",
      // },
      // hideClass: {
      //   popup: "animate__animated animate__fadeOutUp",
      // },
      showConfirmButton: false,
      // timer: 1500,
      // confirmButtonText: "close",
    });
  } else {
    window.location.href = "/MasukanDetailPenerima";
    console.log(Cookies.get("penerima"));
  }
}

const MasukanDetailPengiriman = () => {
  // const url = "http://localhost:3005/service/courier-check-package";
  // axios
  //   .post(url, {
  //     parcel_weight: Cookies.get("beratpaket"),
  //     recipient_name: Cookies.get("penerima"),
  //     recipient_phone: Cookies.get("notelppenerima"),
  //     recipient_address: "Si-Box Suppermall Karawaci",
  //     recipient_province: Cookies.get("provinsi"),
  //     recipient_city: Cookies.get("kabupaten"),
  //     recipient_district: Cookies.get("kecamatan"),
  //     tarif: "25000",
  //     shipper_name: Cookies.get("pengirim"),
  //     insurance: "5000",
  //     notes: "jangan di banting",
  //   })
  //   .then((res) => {});
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
          Masukan Detail Pengirim
        </h3>

        <Container>
          <InputPengirimKeyboard />
          {/* <Form style={{ fontSize: "25px" }}>
            <Form.Group controlId="formName">
              <Form.Label>Penerima :</Form.Label>
              <Form.Control
                type="text"
                placeholder="Masukan Nama Pengirim "
                style={{ fontSize: "30px" }}
              />
            </Form.Group>
            <Form.Group
              controlId="form.TelpPengirim"
              style={{
                marginTop: "1.5rem",
              }}
            >
              <Form.Label>No Telpon Pengirim :</Form.Label>

              <Form.Control
                type="text"
                placeholder="Masukan Nomer Telpon Pengirim "
                style={{ fontSize: "30px" }}
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
                type="text"
                value="Sibox - Suppermall Karawaci"
                readOnly
                style={{ fontSize: "30px" }}
              />
            </Form.Group>
          </Form> */}
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
            <Link to="/PelangganKirimScanInput">
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
            <div onClick={lanjut}>
              <ButtonLanjut />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MasukanDetailPengiriman;
