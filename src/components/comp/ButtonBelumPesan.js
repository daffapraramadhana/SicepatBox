import React from "react";
import { Button } from "react-bootstrap";

function ButtonBelumPesan() {
  return (
    <div>
      <Button
        variant="primary"
        size="lg"
        style={{
          width: "30rem",
          height: "5rem",
          borderRadius: "50px",
          backgroundColor: "#2db83d",
          borderColor: "#2db83d",
          fontSize: "25px",
          marginRight: "-5rem",
          marginBottom: "2rem",
        }}
      >
        Pesan Disini
      </Button>
    </div>
  );
}

export default ButtonBelumPesan;
