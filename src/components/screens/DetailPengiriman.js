import React from "react";
import { Navbar, Container, Row, Button, Col } from "react-bootstrap";
import "../screens/style.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import ButtonBack from "../comp/ButtonBack";
import ButtonLanjut from "../comp/ButtonLanjut";
import NavbarMenu2 from "../comp/NavbarMenu2";
import Cookies from "js-cookie";

function disableRightClick() {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
}

function back() {
  window.location.href = "/MasukanJenisPengiriman";
}

function lanjut() {
  window.location.href = "/ScanBarcode";
}

const DetailPengiriman = () => {
  Cookies.get("pengirim");
  Cookies.get("notelppengirim");
  Cookies.get("penerima");
  Cookies.get("notelppenerima");
  Cookies.get("alamatpenerima");
  Cookies.get("provinsi");
  Cookies.get("kabupaten");
  Cookies.get("kecamatan");
  Cookies.get("asuransi");
  Cookies.get("deliverytype");
  Cookies.get("asuransi");

  disableRightClick();

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
          Detail Pengiriman
        </h3>
        <Container
          style={{
            fontSize: "30px",
            justifyContent: "center",
            alignItems: "center",
            height: "20rem",
            // backgroundColor: "grey",
            display: "flex",
            width: "100vw",
          }}
        >
          <div
            style={{
              fontSize: "25px",
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor: "grey",
              // display: "flex",
              marginTop: "15rem",
              width: "100vw",
              marginLeft: "15rem",
            }}
          >
            <Row>
              <Col>
                <div class="form-group row ">
                  <label for="Pengirim" class="col-sm-3 col-form-label">
                    Pengirim
                  </label>
                  <label for="Pengirim" class="col-sm-1 col-form-label">
                    :
                  </label>
                  <div class="col-sm-5 ">
                    <input
                      type="text"
                      disabled
                      class="form-control-plaintext"
                      id="Pengirim"
                      value={Cookies.get("pengirim")}
                    />
                  </div>
                </div>
              </Col>
              <Col>
                <div class="form-group row">
                  <label
                    for="Penerima"
                    class="col-sm-3 col-form-label"
                    color="#CD2028"
                  >
                    Penerima
                  </label>
                  <label for="Pengirim" class="col-sm-1 col-form-label">
                    :
                  </label>
                  <div class="col-sm-7">
                    <input
                      type="text"
                      disabled
                      class="form-control-plaintext"
                      id="Penerima"
                      value={Cookies.get("penerima")}
                    />
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div class="form-group row">
                  <label for="NoPengirim" class="col-sm-3 col-form-label">
                    Nomer Pengirim
                  </label>
                  <label for="Pengirim" class="col-sm-1 col-form-label ">
                    :
                  </label>
                  <div class="col-sm-5 ">
                    <input
                      type="tel"
                      disabled
                      class="form-control-plaintext"
                      id="NoPengirim"
                      value={Cookies.get("notelppengirim")}
                    />
                  </div>
                </div>
              </Col>
              <Col>
                <div class="form-group row">
                  <label for="NoPenerima" class="col-sm-3 col-form-label">
                    Nomer Penerima
                  </label>
                  <label for="Pengirim" class="col-sm-1 col-form-label">
                    :
                  </label>
                  <div class="col-sm-5">
                    <input
                      type="tel"
                      disabled
                      class="form-control-plaintext"
                      id="NoPengirim"
                      value={Cookies.get("notelppenerima")}
                    />
                  </div>
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div class="form-group row">
                  <label for="NoPengirim" class="col-sm-3 col-form-label">
                    Tipe Pengiriman
                  </label>
                  <label for="Pengirim" class="col-sm-1 col-form-label ">
                    :
                  </label>
                  <div class="col-sm-5 ">
                    <input
                      type="tel"
                      disabled
                      class="form-control-plaintext"
                      id="NoPengirim"
                      value={Cookies.get("deliverytype")}
                    />
                  </div>
                </div>
              </Col>
              <Col>
                <div class="form-group row">
                  <label for="NoPenerima" class="col-sm-3 col-form-label">
                    Detail Paket
                  </label>
                  <label for="Pengirim" class="col-sm-1 col-form-label">
                    :
                  </label>
                  <div class="col-sm-5">
                    <input
                      type="tel"
                      disabled
                      class="form-control-plaintext"
                      id="NoPengirim"
                      value={Cookies.get("packagecontent")}
                    />
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div class="form-group row">
                  <label for="NoPengirim" class="col-sm-3 col-form-label">
                    Berat Paket
                  </label>
                  <label class="col-sm-1 col-form-label ">:</label>
                  <div class="col-sm-3 ">
                    <input
                      type="text"
                      disabled
                      class="form-control-plaintext"
                      id="BeratPaket"
                      value={`${Cookies.get("beratpaket")} ${"kg"}`}
                    />
                  </div>
                </div>
              </Col>
              <Col>
                <div class="form-group row">
                  <label for="NoPengirim" class="col-sm-3 col-form-label">
                    Harga
                  </label>
                  <label class="col-sm-1 col-form-label">:</label>
                  <div class="col-sm-4">
                    <input
                      type="text"
                      disabled
                      class="form-control-plaintext"
                      id="BeratPaket"
                      value={
                        Number(Cookies.get("tarif")) +
                        Number(Cookies.get("asuransi"))
                      }
                    />
                  </div>
                </div>
              </Col>
            </Row>

            <Row>
              <Col>
                <div class="form-group row">
                  <label for="NoPengirim" class="col-sm-2 col-form-label">
                    Alamat Tujuan
                  </label>
                  <label
                    class="col-sm-1 col-form-label"
                    style={{
                      marginLeft: "-45px",
                      width: "45px",
                    }}
                  >
                    :
                  </label>
                  <textarea
                    style={{
                      height: "8rem",
                      width: "30rem",
                      textAlign: "justify",
                    }}
                    cols={10}
                    disabled
                    class="form-control-plaintext"
                    id="AlamatTujuan"
                    value={`${Cookies.get("alamatpenerima")},${Cookies.get(
                      "kecamatan"
                    )},${Cookies.get("kabupaten")},${Cookies.get("provinsi")}`}
                  />
                </div>
                <div class="col-sm-5" style={{ backgroundColor: "blue" }}></div>
              </Col>
            </Row>

            {/* <div class="form-group row">
              <label for="Penerima" class="col-7 col-form-label">
                Alamat Tujuan
              </label>
              <label for="Pengirim" class="col-sm-1 col-form-label">
                :
              </label>
              <div class="col-md-5">
                <textarea
                  style={{
                    height: "8rem",
                    width: "30rem",
                    textAlign: "justify",
                  }}
                  cols={10}
                  disabled
                  class="form-control-plaintext"
                  id="AlamatTujuan"
                  value={`${Cookies.get("alamatpenerima")},${Cookies.get(
                    "kecamatan"
                  )},${Cookies.get("kabupaten")},${Cookies.get("provinsi")}`}
                />
              </div>
            </div> */}
          </div>
        </Container>
      </body>

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

export default DetailPengiriman;
