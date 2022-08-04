import axios from "axios";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
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

function ButtonDimensi() {
  const [active, setActive] = useState();
  const [size, setSize] = useState([]);
  const [lokers, setLokers] = useState([
    {
      type: "S",
      size: "Small",
      ready: 0,
      ukuran: "50x40x10 cm",
      berat: "1-3kg",
    },
    {
      type: "M",
      size: "Medium",
      ready: 0,
      ukuran: "50x40x20 cm",
      berat: "3-5kg",
    },
    {
      type: "L",
      size: "Large",
      ready: 0,
      ukuran: "50x40x42 cm",
      berat: "5kg",
    },
  ]);

  Cookies.set("dimensi", active);
  console.log(Cookies.get("dimensi"));

  useEffect(() => {
    axios({
      method: "POST",
      url: "http://192.168.7.118:3005/service/empty-box",
      data: {},
    }).then((res) => {
      console.log(res.data.data);
      setSize(res.data.data);
      // setLokers[0](res.data.S);
      // setLokers[1](res.data.M);
      // setLokers[2](res.data.L);
    });
  }, []);

  // const lokers = [
  //   {
  //     type: "S",
  //     size: "Small",
  //     ready: 0,
  //     ukuran: "50x40x10 cm",
  //     berat: "1-3kg",
  //   },
  //   {
  //     type: "M",
  //     size: "Medium",
  //     ready: 0,
  //     ukuran: "50x40x20 cm",
  //     berat: "3-5kg",
  //   },
  //   {
  //     type: "L",
  //     size: "Large",
  //     ready: 0,
  //     ukuran: "50x40x42 cm",
  //     berat: "5kg",
  //   },
  // ];

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
            {size[index]}
          </div>
        </ButtonToggle>
      ))}
    </ButtonGroup>
  );
}
export default ButtonDimensi;
