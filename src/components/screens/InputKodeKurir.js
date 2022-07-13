import React, { useState } from "react";
import { Navbar, Container, Row, Button, Col, Form } from "react-bootstrap";
import "../screens/style.css";
// import PinField from "../comp/PinFields.js";
import PinField from "react-pin-field";
import { FaHome, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link, Navigate } from "react-router-dom";
import ButtonBack from "../comp/ButtonBack";
import ButtonLanjut from "../comp/ButtonLanjut";
import NavbarMenu2 from "../comp/NavbarMenu2";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const InputKodeKurir = () => {
  const url = "http://localhost:3005/service/courier-check-package";
  const [input, setInput] = useState("");
  console.log(input);

  function kirim() {
    // preventDefault();
    // console.log(input);
    axios
      .post(url, {
        package_id: input,
      })
      .then((res) => {
        console.log(res.data.response.code);
        Cookies.set("pengirim", res.data.data.store_user_name);
        Cookies.set("nomerpengirim", res.data.data.store_user_phone_number);
        Cookies.set("penerima", res.data.data.recipient_name);
        Cookies.set("nomerpenerima", res.data.data.recipient_user_phone_number);
        Cookies.set("alamattujuan", res.data.data.end_address);
        Cookies.set("idpaket", res.data.data.id);
        Cookies.set("overduetime", res.data.data.overude_time);
        Cookies.set("weight", res.data.data.weight);
        Cookies.set("storetime", res.data.data.store_time);
        Cookies.set("takeuserid", res.data.data.take_user_id);
        Cookies.set("storeuserid", res.data.data.store_user_id);
        Cookies.set("kuririd", res.data.data.courier_id);
        Cookies.set("alamatawal", res.data.data.start_address);
        Cookies.set("validatecode", res.data.data.validate_code);
        Cookies.set("customerstorenumber", res.data.data.customer_store_number);
        Cookies.set("logisticsid", res.data.data.logistics_id);
        Cookies.set("packagenumber", res.data.data.package_number);
        Cookies.set("logisticsid", res.data.data.logistics_id);

        if (
          res.data.response.code == 200 &&
          res.data.data.end_address == "Si Box Stasiun Kemayoran"
        ) {
          window.location.href = "/DetailPengirimanKurir";
          // console.log(res.data.data);
        } else {
          Swal.fire({
            text: res.data.response.message,
            icon: "error",
          });
        }
      });
  }

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
          SCAN BARCODE ATAU INPUT KODE PEMESANAN
        </h3>

        <Container
          style={{
            textAlign: "center",
            marginTop: "5rem",
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
          }}
        >
          <Row style={{ marginLeft: "5rem" }}>
            <Col>
              <form>
                <input
                  type="text"
                  onChange={(e) => setInput(e.target.value)}
                  value={input}
                  style={{
                    width: "50rem",
                    height: "6rem",
                    borderRadius: "50px",
                    textAlign: "center",
                    fontSize: "30px",
                    backgroundColor: "#CED4D3CC",
                  }}
                  placeholder="Masukan kode Pemesanan"
                />
              </form>
            </Col>
            <Col>
              <button
                onClick={kirim}
                style={{
                  width: "5rem",
                  height: "5rem",
                  borderRadius: "50px",
                  // fontSize: "20px",
                  backgroundColor: "#CD2028",
                  borderColor: "#CD2028",
                  marginTop: "10px",
                }}
              >
                <FaArrowRight
                  style={{
                    margin: "auto",
                    height: "2rem",
                    width: "3rem",
                    color: "white",
                  }}
                />
              </button>
            </Col>
          </Row>
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
            {/* <Link onClick={submit}>
              <ButtonLanjut />
            </Link> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default InputKodeKurir;
