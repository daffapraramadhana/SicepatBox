import React from "react";
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

const LoginKurir = () => {
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
          <Row>
            <Col>
              <FormControl
                style={{
                  width: "30rem",
                  height: "5rem",
                  borderRadius: "50px",
                  fontSize: "20px",
                }}
                placeholder="Username"
              />
            </Col>
            <Col>
              <FormControl
                style={{
                  width: "30rem",
                  height: "5rem",
                  borderRadius: "50px",
                  fontSize: "20px",
                }}
                placeholder="Password"
                type="password"
              />
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
            <Link to="/DashboardKurir">
              <ButtonLanjut />
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginKurir;
