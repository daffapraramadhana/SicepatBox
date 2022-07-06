import React from "react";
import { Button } from "react-bootstrap";
import SwalTerimaKasih from "../comp/SwalTerimaKasih";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function ButtonLanjutSwal() {
  return (
    <div>
      <Button
        onClick={SwalTerimaKasih}
        variant="primary"
        size="lg"
        style={{
          width: "15rem",
          height: "5rem",
          // marginLeft: "30rem",
          // // marginRight: "-50rem",
          borderRadius: "50px",
          backgroundColor: "#CD2028",
          borderColor: "#CD2028",
          marginRight: "-10rem",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // backgroundColor: "black",
            margin: "auto",
            textAlign: "center",
          }}
        >
          <h3 style={{ margin: "auto" }}>Lanjut</h3>
          <FaArrowRight
            style={{ margin: "auto", height: "2rem", width: "3rem" }}
          />
        </div>
      </Button>
    </div>
  );
}

export default ButtonLanjutSwal;
