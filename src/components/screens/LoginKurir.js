import React, { useState } from "react";
import {
  Navbar,
  Container,
  Row,
  Button,
  Col,
  FormControl,
} from "react-bootstrap";
import "../screens/style.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import ButtonBack from "../comp/ButtonBack";
import ButtonLanjut from "../comp/ButtonLanjut";
import NavbarMenu from "../comp/NavbarMenu";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

const LoginKurir = () => {
  const url = "http://localhost:3005/service/courier-login";
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  function handle(e) {
    const newdata = { ...data };
    newdata[e.target.id] = e.target.value;
    setData(newdata);
    console.log(newdata);
  }

  function kirim() {
    // preventDefault();
    console.log(data);
    axios
      .post(url, {
        username: data.username,
        password: data.password,
      })
      .then((res) => {
        console.log(res.data.response.code);
        if (res.data.response.code == 200) {
          // simpen Cookies
          window.location.href = "/DashboardKurir";
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
      <NavbarMenu />

      <body>
        <h3
          style={{
            textAlign: "center",
            marginTop: "5rem",
          }}
        >
          Login Kurir
        </h3>
        <Container
          style={{
            marginTop: "5rem",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            display: "flex",
          }}
        >
          <Row style={{ marginLeft: "5rem" }}>
            <Col>
              <input
                id="username"
                value={data.username}
                placeholder="Username"
                onChange={(e) => handle(e)}
                style={{
                  width: "30rem",
                  height: "5rem",
                  borderRadius: "50px",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              />
            </Col>
            <Col>
              <input
                id="password"
                value={data.password}
                placeholder="password"
                type="password"
                onChange={(e) => handle(e)}
                style={{
                  width: "30rem",
                  height: "5rem",
                  borderRadius: "50px",
                  fontSize: "20px",
                  textAlign: "center",
                }}
              />
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
            <Link to="/">
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
            {/* <Link to="/DashboardKurir">
              <ButtonLanjut />
            </Link> */}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginKurir;
