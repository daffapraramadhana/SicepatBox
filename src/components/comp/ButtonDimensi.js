import Cookies from "js-cookie";
import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  bordercolor: black;
  color: #cd2028;
  font-size: 20px;
  padding: 50px 100px;
  border-radius: 50px;
  margin: 10px 10px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  &:disabled {
    color: #cd2028;
    background-color: white;
    opacity: 1;
    cursor: default;
  }
  &:active {
    color: white;
    background-color: #cd2028;
  }
`;
const ButtonToggle = styled(Button)`
  opacity: 1;
  color: #cd2028;
  background-color: white;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    color: white;
    background-color: #CD2028;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const lokers = [
  {
    type: "S",
    size: "Small",
    ready: "3",
    ukuran: "50x40x10 cm",
    berat: "1-3kg",
  },
  {
    type: "M",
    size: "Medium",
    ready: "6",
    ukuran: "50x40x20 cm",
    berat: "3-5kg",
  },
  {
    type: "L",
    size: "Large",
    ready: "2",
    ukuran: "50x40x42 cm",
    berat: "5kg",
  },
];

function ButtonDimensi() {
  const [active, setActive] = useState();
  Cookies.set("dimensi", active);
  console.log(Cookies.get("dimensi"));
  return (
    <ButtonGroup>
      {lokers.map((loker, index) => (
        <ButtonToggle
          key={loker.type}
          active={active === loker.type}
          onClick={() => setActive(loker.type)}
        >
          <div
            style={{
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            {loker.type}
          </div>
          <br />
          {loker.size}
          <br />
          <p style={{ fontSize: "15px" }}>{loker.ukuran}</p>
          <p style={{ fontSize: "20px" }}>{loker.berat}</p>
          <br />
          <div
            style={{
              backgroundColor: "white",
              color: "red",
              width: "70px",
              height: "70px",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              display: "flex",
              borderRadius: "50%",
            }}
          >
            {loker.ready}
          </div>
        </ButtonToggle>
      ))}
    </ButtonGroup>
  );
}
export default ButtonDimensi;
