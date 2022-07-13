import React from "react";
import Clock from "../comp/Clock";
import { Navbar, Container, Col, Row, Image } from "react-bootstrap";
import { BsBuilding } from "react-icons/bs";
import sicepatbg from "../image/sicepatbg.jpg";

function NavbarMenu2() {
  return (
    <div>
      <Navbar
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
          alignItems: "center",
          backgroundImage: `url(${sicepatbg})`,
          backgroundSize: "auto",
        }}
      >
        <Navbar.Text
          style={{
            color: "white",
            fontSize: "50px",
            fontWeight: "bold",
            marginLeft: "30px",
          }}
        >
          Sibox
        </Navbar.Text>

        <div
          style={{
            backgroundColor: "white",
            borderRadius: "20px",
            textAlign: "center",
            color: "black",
            height: "50px",
            textAlign: "center",
            alignItems: "center",
            display: "flex",
            fontSize: "18px",
            padding: "10px 10px",
            fontWeight: "bold",
          }}
        >
          <BsBuilding style={{ marginRight: "20px" }} />
          #SSK | Sibox - Suppermall Karawaci
        </div>
        <Navbar.Text
          style={{
            color: "white",
            fontSize: "20px",
            padding: "0",
            marginRight: "30px",
          }}
        >
          <Clock />
        </Navbar.Text>
        {/* <Container></Container> */}
      </Navbar>
    </div>
  );
}

export default NavbarMenu2;
