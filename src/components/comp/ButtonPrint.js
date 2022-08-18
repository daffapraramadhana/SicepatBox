import React from "react";
import { Button } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";
import { BiDoorOpen } from "react-icons/bi";
import { AiOutlinePrinter } from "react-icons/ai";

function ButtonPrint() {
  return (
    <div>
      <Button
        variant="primary"
        size="lg"
        style={{
          width: "15rem",
          height: "5rem",
          // marginLeft: "30rem",
          // // marginRight: "-50rem",
          borderRadius: "50px",
          backgroundColor: "white",
          borderColor: "#CD2028",
          color: "#CD2028",
          // marginRight: "-10rem",
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
            // marginTop: "1rem",
          }}
        >
          <p style={{ margin: "auto" }}>Tes print</p>
          <AiOutlinePrinter
            style={{ margin: "auto", height: "2rem", width: "3rem" }}
          />
        </div>
      </Button>
    </div>
  );
}

export default ButtonPrint;
