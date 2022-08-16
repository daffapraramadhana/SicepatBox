import React, { useState, useRef } from "react";
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
import ButtonPintu from "../comp/ButtonPintu";

function disableRightClick() {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
}

function back() {
  window.location.href = "/MasukanDetailPenerimaLanjut";
}

function lanjut() {
  if (
    Cookies.get("dimensi") == "undefined" ||
    Cookies.get("dimensi") == "" ||
    Cookies.get("beratpaket") == undefined ||
    Cookies.get("beratpaket") == ""
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
    window.location.href = "/MasukanJenisPengiriman";
    // console.log(Cookies.get("penerima"));
  }
}

const ManajemenPintu = () => {
  disableRightClick();
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
          Door Management
        </h3>
        <div
          fluid
          style={{
            // margin: "auto",
            width: "100%",
            marginTop: "3rem",
            textAlign: "center",
            // backgroundColor: "yellow",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ButtonPintu />
        </div>
      </Container>

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

export default ManajemenPintu;
