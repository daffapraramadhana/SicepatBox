import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #d9d9d9;
  bordercolor: red;
  color: black;
  font-size: 20px;
  padding: 60px 50px;
  border-radius: 50px;
  margin: 10px 10px;
  cursor: pointer;
  &:disabled {
    color: black;
    opacity: 1;
    cursor: default;
  }
  &:active {
    color: red;
  }
`;
const ButtonToggle = styled(Button)`
  opacity: 0.6;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
  `}
`;
const ButtonGroup = styled.div`
  display: flex;
`;
const types = ["Small", "Medium", "Large"];

function ButtonDimensi() {
  const [active, setActive] = useState(types[0]);
  return (
    <ButtonGroup>
      {types.map((type) => (
        <ButtonToggle
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
        </ButtonToggle>
      ))}
    </ButtonGroup>
  );
}

export default ButtonDimensi;
