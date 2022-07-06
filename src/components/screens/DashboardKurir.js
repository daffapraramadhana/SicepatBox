import React from "react";
import {
  Navbar,
  Container,
  Row,
  Button,
  Col,
  FormControl,
  Image,
} from "react-bootstrap";
import "../screens/style.css";
import { FaArrowRight, FaArrowLeft, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import kurirdrop from "../image/kurirdrop.svg";
import ButtonBack from "../comp/ButtonBack";
import ButtonLanjut from "../comp/ButtonLanjut";
import NavbarMenu from "../comp/NavbarMenu";

const DashboardKurir = () => {
  return (
    <div className="">
      <NavbarMenu />

      <body>
        <Container
          fluid
          style={{
            display: "flex",
            alignItems: "center",
            bottom: 0,
            marginLeft: "10rem",
            marginRight: "10rem",
            width: "auto",
            height: "91vh",
            flexDirection: "row",
            justifyContent: "Space-between",
          }}
        >
          <div
            style={{
              height: "100vh",
              width: "45%",
              marginTop: "-10rem",
            }}
          >
            <Container
              style={{
                backgroundColor: "#D9D9D9",
                height: "30vh",
                width: "90%",
                marginTop: "15vh",
                display: "flex",
                alignItems: "center",
                textAlign: "center",
                borderColor: "black",
              }}
            >
              <Col>
                <FaUser
                  style={{
                    width: "50px",
                    height: "50px",
                    marginTop: "-5vh",
                  }}
                />
                <form style={{ fontSize: "20px" }}>
                  <div class="form-group row">
                    <label for="Pengirim" class="col-sm-3 col-form-label">
                      Nama :
                    </label>
                    <div class="col-sm-7">
                      <input
                        type="text"
                        readonly
                        class="form-control-plaintext"
                        id="namakurir"
                        value="Akmal"
                      />
                    </div>
                  </div>
                  <div class="form-group row">
                    <label for="NoPengirim" class="col-sm-3 col-form-label">
                      Logistik :
                    </label>
                    <div class="col-sm-7">
                      <input
                        type="text"
                        readonly
                        class="form-control-plaintext"
                        id="logistik"
                        value="Sicepat"
                      />
                    </div>
                  </div>
                </form>
              </Col>
            </Container>
            <Button
              href="/InputKodeKurir"
              style={{
                backgroundColor: "white",
                height: "40vh",
                width: "90%",
                marginTop: "5vh",
                border: "1px solid #CD2028",
                backgroundColor: "#ffff",
                marginLeft: "3.5vh",
                borderRadius: "50px",
              }}
            >
              <Container style={{}}>
                <Container
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Image
                    src={kurirdrop}
                    style={{
                      width: "300px",
                      marginTop: "50px",
                      marginBottom: "30px",
                    }}
                  />
                </Container>
                <h3
                  style={{
                    textAlign: "center",
                    marginTop: "3rem",
                    color: "black",
                  }}
                >
                  Drop
                </h3>
              </Container>
            </Button>
          </div>
          <div
            style={{
              backgroundColor: "white",
              height: "100vh",
              width: "45%",
            }}
          >
            <Container
              style={{
                height: "75vh",
                width: "90%",
                marginTop: "7vh",
                border: "1px solid #CD2028",
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}
            >
              <h3 style={{ marginTop: "5vh" }}>Paket Tersedia</h3>
              <div style={{ marginTop: "3vh" }}>
                <button
                  fluid
                  style={{
                    height: "10vh",
                    width: "100%",
                    top: 0,
                    border: "1px solid #CD2028",
                    borderRadius: "20px",
                  }}
                ></button>
                <button
                  fluid
                  style={{
                    height: "10vh",
                    width: "100%",
                    top: 0,
                    border: "1px solid #CD2028",
                    marginTop: "20px",
                    borderRadius: "20px",
                  }}
                ></button>
                <button
                  fluid
                  style={{
                    height: "10vh",
                    width: "100%",
                    top: 0,
                    border: "1px solid #CD2028",
                    marginTop: "20px",
                    borderRadius: "20px",
                  }}
                ></button>
                <button
                  fluid
                  style={{
                    height: "10vh",
                    width: "100%",
                    top: 0,
                    border: "1px solid #CD2028",
                    marginTop: "20px",
                    borderRadius: "20px",
                  }}
                ></button>
              </div>
            </Container>
          </div>
        </Container>
      </body>

      {/* <Container
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
            <Link to="/TestLandingPage">
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
            <Button
              href="/ScanBarcode"
              variant="primary"
              size="lg"
              style={{
                width: "10rem",
                // marginLeft: "30rem",
                // // marginRight: "-50rem",
                borderRadius: "50px",
                backgroundColor: "#CD2028",
                borderColor: "#CD2028",
                marginRight: "-10rem",
              }}
            >
              Next
              <FaArrowRight style={{ marginLeft: "3rem" }} />
            </Button>
          </Col>
        </Row>
      </Container> */}
    </div>
  );
};

export default DashboardKurir;
