import React, { useEffect, useState } from "react";
import { Navbar, Container, Row, Button, Col, Image } from "react-bootstrap";
import "../screens/style.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import qris from "../image/qris.jpeg";
import ButtonBack from "../comp/ButtonBack";
import ButtonLanjut from "../comp/ButtonLanjut";
import NavbarMenu2 from "../comp/NavbarMenu2";
import Cookies from "js-cookie";
import axios from "axios";
import qriscode from "../image/qriscode.svg";
import Swal from "sweetalert2";

const ScanBarcode = () => {
  const [img, setImg] = useState("");
  const [getmid, setMid] = useState("");
  const [getprovider, setProvider] = useState("");
  const [gettid, setTid] = useState("");
  const [gettrxid, setTrxid] = useState("");
  const [getamount, setAmount] = useState("");
  const [gettoken, setToken] = useState("");

  const ambilqr = () => {
    axios({
      method: "POST",
      url: "http://192.168.7.123:3005/service/get-qr",
      data: {
        amount: Number(Cookies.get("tarif")) + Number(Cookies.get("asuransi")),
      },
    }).then((res) => {
      console.log(res.data);
      const imageQr = res.data.data.qr;
      setImg(imageQr);

      const tid = res.data.data.tid;
      setTid(tid);

      const mid = res.data.data.mid;
      setMid(mid);

      const trxid = res.data.data.trx_id;
      setTrxid(trxid);

      const amount = res.data.data.amount;
      setAmount(amount);

      const token = res.data.data.token;
      setToken(token);
    });
  };

  useEffect(() => {
    ambilqr();
  }, "");

  function kirim() {
    // console.log("token", gettoken);
    // console.log("mid", getmid);
    // console.log("tid", gettid);
    // const urlkirim = "http://localhost:3005/service/pickup-request";
    // axios({
    //   method: "POST",
    //   url: urlkirim,
    //   data: {
    //     store_user_name: Cookies.get("pengirim"),
    //     shipper_phone: Cookies.get("notelppengirim"),
    //     dimensi: Cookies.get("dimensi"),
    //     weight: Cookies.get("beratpaket"),
    //     recipient_name: Cookies.get("penerima"),
    //     recipient_phone: Cookies.get("notelppenerima"),
    //     recipient_address: Cookies.get("alamatpenerima"),
    //     recipient_province: Cookies.get("provinsi"),
    //     recipient_city: Cookies.get("kabupaten"),
    //     recipient_district: Cookies.get("kecamatan"),
    //     recipient_subdistrict: "Sumur Batu",
    //     tarif: "25000",
    //     shipper_name: Cookies.get("pengirim"),
    //     insurance: "5000",
    //     notes: "jangan di banting",
    //     delivery_type: "SIUNT",
    //     parcel_content: Cookies.get("packagecontent"),
    //     parcel_value: Cookies.get("packagevalue"),
    //   },
    // }).then((res) => {
    //   console.log(res);
    // });

    axios({
      method: "POST",
      url: "http://192.168.7.123:3005/service/check-qr-status",
      data: {
        token: gettoken,
        tid: gettid,
        mid: getmid,
        provider: getprovider,
        amount: getamount,
        trx_id: gettrxid,
      },
    }).then((res) => {
      console.log(res.data);
      if (res.data.data.status == "PAID") {
        axios({
          method: "POST",
          url: "http://192.168.7.123:3005/service/pickup-request",
          data: {
            dimensi: Cookies.get("dimensi"),
            weight: Cookies.get("beratpaket"),
            store_user_name: Cookies.get("pengirim"),
            shipper_phone: Cookies.get("notelppengirim"),
            recipient_name: Cookies.get("penerima"),
            recipient_phone: Cookies.get("notelppenerima"),
            // recipient_address: Cookies.get("alamatpenerima"),
            recipient_district: Cookies.get("kecamatan"),
            recipient_zipcode: Cookies.get("zipcode"),
            recipient_city: Cookies.get("kabupaten"),
            recipient_province: Cookies.get("provinsi"),
            tarif: Number(Cookies.get("tarif")),
            end_address: Cookies.get("alamatpenerima"),
            insurance: Number(Cookies.get("asuransi")),
            notes: "Jangan di banting dan taruh di suhu ruangan",
            delivery_type: Cookies.get("deliverytype"),
            parcel_content: Cookies.get("packagecontent"),
            parcel_value: Cookies.get("packagevalue"),
            parcel_category: Cookies.get("packagecategory"),
            destination_code: Cookies.get("destinationcode"),
            trx_type: res.data.data.trx,
            trx_id: gettrxid,
          },
        }).then((res) => {
          if (res.data.response.code == 200) {
            window.location.href = "/LabelPrint";
          } else {
            Swal.fire({
              position: "center",
              icon: "warning",
              title: res.data.response.message,
              showConfirmButton: false,
              timer: 1500,
              // confirmButtonText: "close",
            });
          }
        });
      } else {
        Swal.fire({
          position: "center",
          icon: "warning",
          title: "Silahkan Lakukan Pembayaran",
          showConfirmButton: false,
          timer: 1500,
          // confirmButtonText: "close",
        });
      }
    });
  }

  // console.log("adadas", img);
  // console.log("token", gettoken);
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
          Silahkan Scan Qris Untuk Bayar
        </h3>

        <div
          style={{
            textAlign: "center",
            backgroundImage: `url(${qris})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "100% 100%",
            display: "flex",
            justifyContent: "center",
            marginLeft: "auto",
            marginRight: "auto",
            width: "500px",
            height: "500px",

            // marginTop: "5rem",
          }}
        >
          <img
            src={img}
            style={{
              width: "300px",
              height: "300px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              margin: "auto",
            }}
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
            <Link to="/DetailPengiriman">
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
            <div onClick={kirim}>
              <ButtonLanjut />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ScanBarcode;
