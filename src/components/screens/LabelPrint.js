import React, { useState } from "react";
import { Navbar, Container, Row, Button, Col, Image } from "react-bootstrap";
import "../screens/style.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import printlabel from "../image/printlabel.svg";
import box from "../image/box.svg";
import { ImEnter } from "react-icons/im";
import checkbox from "../image/checkbox.svg";
import ModalTerimaKasih from "../comp/ModalTerimaKasih";
import ButtonBack from "../comp/ButtonBack";
import ButtonLanjut from "../comp/ButtonLanjut";
import NavbarMenu from "../comp/NavbarMenu";
import ButtonBukaLokerKembali from "../comp/ButtonBukaLokerKembali";
import ButtonLanjutSwal from "../comp/ButtonLanjutSwal";

const LabelPrint = () => {
  return (
    <div className="">
      <NavbarMenu />

      <body>
        <Container style={{ marginTop: "5rem" }}>
          <Row>
            <Col>
              <Container>
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "2rem",
                    marginBottom: "3rem",
                  }}
                >
                  1
                </h3>
                <Container
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Image
                    src={printlabel}
                    style={{
                      width: "200px",
                    }}
                  />
                </Container>
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "3rem",
                  }}
                >
                  Label Telah diprint Silahkan Tempel Pada Paket
                </h3>
              </Container>
            </Col>
            <Col>
              <Container>
                {" "}
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "2rem",
                    marginBottom: "3rem",
                  }}
                >
                  2
                </h3>
                <Container
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Image
                    src={box}
                    style={{
                      width: "120px",
                    }}
                  />
                </Container>
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "2.85rem",
                  }}
                >
                  Loker Nomer 3 Telah Terbuka Silahkan Masukan paket dan
                  Pastikan Label Telah Tertempel
                </h3>
              </Container>
            </Col>
            <Col>
              {" "}
              <Container>
                {" "}
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "2rem",
                    marginBottom: "3rem",
                  }}
                >
                  3
                </h3>
                <Container
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Image
                    src={checkbox}
                    style={{
                      width: "200px",
                    }}
                  />
                </Container>
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "3rem",
                  }}
                >
                  Silahkan Tutup Loker
                </h3>
              </Container>
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
            {/* <Link to="/ScanBarcode">
              <Button
                variant="primary"
                size="lg"
                style={{
                  width: "5rem",
                  borderRadius: "50px",
                  backgroundColor: "#CD2028",
                  borderColor: "#CD2028",
                  marginLeft: "-10rem",
                }}
              >
                <FaArrowLeft
                  style={{
                    marginBottom: "5px",
                  }}
                />
              </Button>
            </Link> */}
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
            >
              <Link to="">
                <ButtonBukaLokerKembali />
              </Link>
            </Container>
          </Col>
          <Col
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <ButtonLanjutSwal />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LabelPrint;
