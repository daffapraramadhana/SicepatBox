import axios from "axios";
import Cookies from "js-cookie";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import config from "../comp/config.json";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Button = styled.button`
  bordercolor: black;
  color: #cd2028;
  font-size: 20px;
  width: 1px;
  height: 150px;
  padding: 40px 40px;
  border-radius: 50px;
  margin: 10px 10px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  &:disabled {
    color: #cd2028;
    background-color: white;
    opacity: 1;
    cursor: default;
  }
`;
const ButtonToggle = styled(Button)`
  opacity: 1;
  color: white;
  width: 30px;
  background-color: #228b22;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    color: #228B22;
    background-color: 	white;
  `}
`;

const ButtonToggle2 = styled(Button)`
  opacity: 1;
  color: white;
  width: 30px;
  background-color: #cd2028;
  ${({ active }) =>
    active &&
    `
    opacity: 1;
    color: #cd2028;
    background-color: white;
  `}
`;

const ButtonToggle3 = styled(Button)`
  opacity: 1;
  color: #cd2028;
  width: 30px;
  background-color: red;
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
  flex-direction: row;
  width: 100vw;
  background-color: yellow;
  heigth: 100vh;
`;

const ButtonGroup2 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  background-color: green;
  heigth: 100vh;
`;

const ButtonGroup3 = styled.div`
  display: flex;
  flex-direction: row;
  width: 100vw;
  background-color: red;
  heigth: 100vh;
`;

function ButtonPintu() {
  const [active, setActive] = useState();
  const [sizes, setSizes] = useState([]);

  //   Cookies.set("dimensi", active);
  //   console.log("dimensi eee", Cookies.get("dimensi"));
  const boxProcess = (result) => {
    console.log("ini box", result);
    setActive(result.id);
  };

  useEffect(() => {
    axios({
      method: "POST",
      url: config.url_getboxs,
      data: {},
    }).then((res) => {
      console.log("data loker", res.data.data);
      setSizes(res.data.data);
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
  if (
    Cookies.get("dimensi") != undefined ||
    Cookies.get("dimensi") != "" ||
    Cookies.get("beratpaket") != undefined ||
    Cookies.get("dimensi") != ""
  ) {
  }

  return (
    // <div>
    //   <ButtonGroup>
    //     {sizes.map((size, index) => {
    //       if (index < 10) {
    //         {
    //           /* console.log("ini index 10", size); */
    //         }

    //         return (
    //           <ButtonToggle
    //             key={size.id}
    //             active={active === size.id}
    //             onClick={() => boxProcess(size)}
    //           >
    //             <div
    //               style={{
    //                 fontWeight: "bold",
    //                 fontSize: "30px",
    //               }}
    //             >
    //               {size.number}
    //             </div>
    //             <br />
    //             {size.status}
    //             <br />
    //             <div
    //               style={{
    //                 backgroundColor: "white",
    //                 color: "red",
    //                 width: "70px",
    //                 height: "70px",
    //                 alignItems: "center",
    //                 textAlign: "center",
    //                 justifyContent: "center",
    //                 display: "flex",
    //                 borderRadius: "50%",
    //               }}
    //             >
    //               {size.box_type_id == "" && <p></p>}
    //               {size.box_type_id == "" && <p></p>}
    //               {size.box_type_id == "" && <p></p>}
    //             </div>
    //           </ButtonToggle>
    //         );
    //       }
    //     })}
    //   </ButtonGroup>

    //   <ButtonGroup2>
    //     {sizes.map((size, index) => {
    //       if (index >= 10 && index < 20) {
    //         {
    //           /* console.log("ini index 10 dan 20", size); */
    //         }

    //         return (
    //           <ButtonToggle
    //             key={size.id}
    //             active={active === size.id}
    //             onClick={() => boxProcess(size)}
    //           >
    //             <div
    //               style={{
    //                 fontWeight: "bold",
    //                 fontSize: "30px",
    //               }}
    //             >
    //               {size.number}
    //             </div>
    //             <br />
    //             {size.status}
    //             <br />
    //             <div
    //               style={{
    //                 backgroundColor: "white",
    //                 color: "red",
    //                 width: "70px",
    //                 height: "70px",
    //                 alignItems: "center",
    //                 textAlign: "center",
    //                 justifyContent: "center",
    //                 display: "flex",
    //                 borderRadius: "50%",
    //               }}
    //             ></div>
    //           </ButtonToggle>
    //         );
    //       }
    //     })}
    //   </ButtonGroup2>
    //   <ButtonGroup3>
    //     {sizes.map((size, index) => {
    //       if (index >= 20 && index < 30) {
    //         {
    //           /* console.log("ini index 20 dan 30", size); */
    //         }

    //         return (
    //           <ButtonToggle
    //             key={size.id}
    //             active={active === size.id}
    //             onClick={() => boxProcess(size)}
    //           >
    //             <div
    //               style={{
    //                 fontWeight: "bold",
    //                 fontSize: "30px",
    //               }}
    //             >
    //               {size.number}
    //             </div>
    //             <br />
    //             {size.status}
    //             <br />
    //             <div
    //               style={{
    //                 backgroundColor: "white",
    //                 color: "red",
    //                 width: "70px",
    //                 height: "70px",
    //                 alignItems: "center",
    //                 textAlign: "center",
    //                 justifyContent: "center",
    //                 display: "flex",
    //                 borderRadius: "50%",
    //               }}
    //             ></div>
    //           </ButtonToggle>
    //         );
    //       }
    //     })}
    //   </ButtonGroup3>
    // </div>
    <Box
      md={{ flexGrow: 1 }}
      sx={{
        width: "50vw",
        height: "10rem",
        // backgroundColor: "yellow",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        zindex: "5",
      }}
    >
      <Grid container spacing={{ xs: 1 }} columns={{ xs: 20 }}>
        {sizes.map((size, index) => {
          if (size.status == "FREE") {
            return (
              <Grid size xs={2} key={index}>
                <ButtonToggle
                  key={size.id}
                  active={active === size.id}
                  onClick={() => boxProcess(size)}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    {size.number}
                  </div>
                  <br />
                  {size.status}
                  <br />
                  {size.box_type_id ==
                    "b31e343b-3a13-489b-b696-2bb27115abda" && (
                    <p style={{ textAlign: "center" }}>S</p>
                  )}
                  {size.box_type_id ==
                    "f19f05de-6232-4448-98c0-356aa1a1f49b" && <p>M</p>}
                  {size.box_type_id ==
                    "9512c05e-85de-48b7-bf34-0d1f3ab5081f" && <p>L</p>}
                </ButtonToggle>
              </Grid>
            );
          } else if (size.status == "USED") {
            return (
              <Grid size xs={2} key={index}>
                <ButtonToggle2
                  key={size.id}
                  active={active === size.id}
                  onClick={() => boxProcess(size)}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    {size.number}
                  </div>
                  <br />
                  {size.status}
                  <br />
                  {size.box_type_id ==
                    "b31e343b-3a13-489b-b696-2bb27115abda" && (
                    <p style={{ textAlign: "center" }}>S</p>
                  )}
                  {size.box_type_id ==
                    "f19f05de-6232-4448-98c0-356aa1a1f49b" && <p>M</p>}
                  {size.box_type_id ==
                    "9512c05e-85de-48b7-bf34-0d1f3ab5081f" && <p>L</p>}
                </ButtonToggle2>
              </Grid>
            );
          } else if (size.status == "LOCK") {
            return (
              <Grid size xs={2} key={index}>
                <ButtonToggle3
                  key={size.id}
                  active={active === size.id}
                  onClick={() => boxProcess(size)}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      fontSize: "20px",
                    }}
                  >
                    {size.number}
                  </div>
                  <br />
                  {size.status}
                  <br />
                  {size.box_type_id ==
                    "b31e343b-3a13-489b-b696-2bb27115abda" && (
                    <p style={{ textAlign: "center" }}>S</p>
                  )}
                  {size.box_type_id ==
                    "f19f05de-6232-4448-98c0-356aa1a1f49b" && <p>M</p>}
                  {size.box_type_id ==
                    "9512c05e-85de-48b7-bf34-0d1f3ab5081f" && <p>L</p>}
                </ButtonToggle3>
              </Grid>
            );
          }
        })}
      </Grid>
    </Box>
  );
}
export default ButtonPintu;
