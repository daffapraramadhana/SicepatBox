import React from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import "../screens/style.css";
import { FaHome, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Navbar from "../comp/Navbar";

const PelangganKirimScanInput = () => {
  return (
    <div className="">
      <Navbar />

      <body>
        <h3
          style={{
            textAlign: "center",
            marginTop: "5rem",
          }}
        >
          SCAN BARCODE ATAU INPUT KODE PEMESANAN
        </h3>

        {/* <div className="pin">
          <PinField
            className="field-a"
            onChange={setCode}
            validate={/^[0-9]$/}
            onComplete={() => setCompleted(true)}
            style={{
              backgroundColor: "#ebeffc",
              borderRadius: "15px",
              fontSize: "2rem",
              textAlign: "center",
              width: "4.5rem",
              margin: "0.25rem",
              height: "4rem",
              borderColor: "#ebeffc",
              outline: "none",
            }}
          />
        </div> */}
        <div
          style={{
            textAlign: "center",
          }}
        >
          <input
            type="text"
            style={{
              width: "50rem",
              height: "6rem",
              borderRadius: "50px",
              marginTop: "5rem",
              textAlign: "center",
              fontSize: "30px",
              backgroundColor: "#CED4D3CC",
            }}
            placeholder="Masukan kode Pemesanan"
          />
        </div>
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
                <FaHome
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
            >
              {" "}
              <Button
                href="/MasukanDetailPengiriman"
                variant="primary"
                size="lg"
                style={{
                  width: "30rem",
                  borderRadius: "50px",
                  backgroundColor: "#CD2028",
                  borderColor: "#CD2028",
                }}
              >
                Belum Melakukan Pemesanan
              </Button>
            </Container>
          </Col>
          <Col
            style={{
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            {" "}
            <Button
              href="/DetailPengirimanBarcode"
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
              Lanjut
              <FaArrowRight style={{ marginLeft: "3rem" }} />
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default PelangganKirimScanInput;
