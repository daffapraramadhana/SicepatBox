import React, { useState, useRef, useEffect } from "react";
import { Navbar, Container, Row, Button, Col } from "react-bootstrap";
import "../screens/style.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import ButtonDimensi from "../comp/ButtonDimensi";
import ButtonBack from "../comp/ButtonBack";
import ButtonLanjut from "../comp/ButtonLanjut";
import NavbarMenu2 from "../comp/NavbarMenu2";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import InputBeratPaket from "../comp/InputBeratPaket";
import ButtonJenisPengiriman from "../comp/ButtonJenisPengiriman";
import InputAsuransi from "../comp/InputAsuransi";
import axios from "axios";

function lanjut() {
  if (
    Cookies.get("packagecategory") == "undefined" ||
    "" ||
    Cookies.get("deliverytype") == "undefined" ||
    "" ||
    Cookies.get("packagecontent") == "undefined" ||
    ""
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
    window.location.href = "/DetailPengiriman";
    // console.log(Cookies.get("penerima"));
  }
}

const MasukanJenisPengiriman = () => {
  Cookies.set("asuransi", "0");

  return (
    <div className="">
      <NavbarMenu2 />

      <Container fluid>
        <h3
          style={{
            textAlign: "center",
            marginTop: "3rem",
            marginBottom: "3rem",
            // marginRight: "3rem",
          }}
        >
          Informasi Paket
        </h3>
        <div
          style={{
            // margin: "auto",
            width: "100%",
            marginTop: "3rem",
            textAlign: "center",
            // backgroundColor: "yellow",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          {/* <ButtonJenisPengiriman /> */}
          <div style={{ width: "50%" }}>
            <InputAsuransi />
          </div>
        </div>
      </Container>

      <Container
        fluid
        style={{
          position: "absolute",
          bottom: "0",
          marginBottom: "3rem",
          flex: "1",
          display: "flex",
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
            <Link to="/MasukanDimensi">
              <ButtonBack />
            </Link>
          </Col>

          <Col
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          ></Col>
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

export default MasukanJenisPengiriman;
