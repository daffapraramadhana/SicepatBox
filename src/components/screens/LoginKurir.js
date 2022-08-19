import React, { useState, useRef } from "react";
import {
  Navbar,
  Container,
  Row,
  Button,
  Col,
  FormControl,
} from "react-bootstrap";
import "../screens/style.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import "react-phone-number-input/style.css";
import ButtonBack from "../comp/ButtonBack";
import ButtonLanjut from "../comp/ButtonLanjut";
import NavbarMenu2 from "../comp/NavbarMenu2";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import InputLoginOperator from "../comp/InputLoginOperator";

function back() {
  window.location.href = "/";
}

const LoginKurir = () => {
  const url = "http://192.168.7.118:3005/service/courier-login";
  // const [data, setData] = useState({
  //   username: "",
  //   password: "",
  // });

  // function handle(e) {
  //   const newdata = { ...data };
  //   newdata[e.target.id] = e.target.value;
  //   setData(newdata);
  //   console.log(newdata);
  // }

  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [layoutName, setLayoutName] = useState("default");
  const [inputName, setInputName] = useState("default");
  const keyboard = useRef();

  const onChangeAll = (inputs) => {
    /**
     * Here we spread the inputs into a new object
     * If we modify the same object, react will not trigger a re-render
     */
    setInputs({ ...inputs });
    console.log("Inputs changed", inputs);
  };

  const handleShift = () => {
    const newLayoutName = layoutName === "default" ? "shift" : "default";
    setLayoutName(newLayoutName);
  };

  const onKeyPress = (button) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const onChangeInput = (event) => {
    const inputVal = event.target.value;

    setInputs({
      ...inputs,
      [inputName]: inputVal,
    });

    keyboard.current.setInput(inputVal);
  };

  const getInputValue = (inputName) => {
    return inputs[inputName] || "";
  };

  function kirim() {
    // preventDefault();
    console.log(inputs);
    axios
      .post(url, {
        username: inputs.username,
        password: inputs.password,
      })
      .then((res) => {
        console.log(res.data.response.code);
        if (res.data.response.code == 200) {
          // simpen Cookies
          window.location.href = "/DashboardKurir";
        } else {
          Swal.fire({
            text: res.data.response.message,
            icon: "error",
          });
        }
      });
  }
  return (
    <div className="">
      <NavbarMenu2 />

      <body>
        <InputLoginOperator />
      </body>
      <div
        style={{
          width: "100vw",
          position: "absolute",
          bottom: "0",
          // marginBottom: "3rem",
          flex: "1",
          flexDirection: "row",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "50px",
          // backgroundColor: "yellow",
          // marginLeft: "1rem",
        }}
      >
        <div onClick={back}>
          <ButtonBack />
        </div>

        {/* <div onClick={lanjut}>
          <ButtonLanjut />
        </div> */}
      </div>
    </div>
  );
};

export default LoginKurir;
