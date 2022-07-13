import Cookies from "js-cookie";
import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  ${"" /* background-color: #ffff; */}
  bordercolor: black;
  color: red;
  font-size: 20px;
  padding: 50px 70px;
  border-radius: 50px;
  margin: 10px 10px;
  cursor: pointer;
  &:disabled {
    color: red;
    background-color: white;
    opacity: 1;
    cursor: default;
  }
  &:active {
    color: white;
    background-color: red;
  }
`;
const ButtonToggle = styled(Button)`
  opacity: 0.3;
  color: red;
  background-color: white;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    color: white;
    background-color: red;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const lokers = [
  { type: "S", size: "Small", ready: "3" },
  { type: "M", size: "Medium", ready: "6" },
  { type: "L", size: "Large", ready: "2" },
];
// const readys = ["1", "5", "10"];

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
          <div style={{ fontWeight: "bold", fontSize: "30px" }}>
            {" "}
            {loker.type}
          </div>
          <br />
          {loker.size}
          <br />
          {loker.ready}
        </ButtonToggle>
      ))}
    </ButtonGroup>
  );
}
export default ButtonDimensi;
