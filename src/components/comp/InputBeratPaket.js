import Cookies from "js-cookie";
import React, { Component, useState } from "react";
import { Form } from "react-bootstrap";
import { render } from "react-dom";
import { BsArrowLeft } from "react-icons/bs";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "../screens/style.css";

class InputBeratPaket extends Component {
  state = {
    layoutName: "key",
    inputName: "inputBeratPaket",
    input: {},
    // Just for demo purposes
    submittedData: "",
    keyboardOpen: "",
  };

  onChangeAll = (inputObj) => {
    this.setState({
      input: inputObj,
    });

    console.log("Input changed", inputObj);
  };

  onKeyPress = (button) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();

    if (button === "{clear}") this.clearScreen();

    if (button === "{close}") this.closeKeyboard();
  };

  handleShift = () => {
    let layoutName = this.state.layoutName;

    this.setState({
      layoutName: layoutName === "default" ? "shift" : "default",
    });
  };

  onChangeInput = (event) => {
    let inputVal = event.target.value;

    let updatedInputObj = {
      ...this.state.input,
      [this.state.inputName]: inputVal,
    };

    this.setState(
      {
        input: updatedInputObj,
      },
      () => {
        this.keyboard.setInput(inputVal);
      }
    );
  };

  setActiveInput = (inputName) => {
    this.setState(
      {
        inputName: inputName,
        keyboardOpen: true,
      },
      () => {
        console.log("Active input", inputName);
      }
    );
  };

  closeKeyboard = () => {
    this.setState({
      keyboardOpen: false,
    });
  };

  submit = () => {
    this.setState({
      submittedData: JSON.stringify(this.state.input),
    });
    console.log(this.state.input);
  };

  clearScreen = () => {
    let input = { ...this.state.input };
    let inputName = this.state.inputName;
    input[inputName] = "";

    this.setState({ input }, () => {
      this.keyboard.clearInput(inputName);
      console.log(
        "cleared",
        input,
        this.keyboard.options.inputName,
        this.keyboard.input,
        this.keyboard.getInput()
      );
    });
  };

  render() {
    let { input, keyboardOpen } = this.state;
    Cookies.set("beratpaket", input.inputBeratPaket);
    console.log(Cookies.get("beratpaket"));

    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Form style={{ fontSize: "25px" }}>
          <Form.Group controlId="formName">
            <Form.Label>Berat Paket :</Form.Label>
            <Form.Control
              onFocus={() => {
                this.setActiveInput("inputBeratPaket");
                this.setState({ layoutName: "ip" });
              }}
              value={`${input["inputBeratPaket"] || ""} ${"kg"}`}
              onChange={(e) => this.onChangeInput(e)}
              type="text"
              placeholder="Estimasi Berat Paket "
              style={{ fontSize: "30px", textAlign: "center" }}
            />
          </Form.Group>

          <div
            className={`keyboardContainerBeratPaket ${
              !keyboardOpen ? "hidden" : ""
            }`}
          >
            <Keyboard
              keyboardRef={(r) => (this.keyboard = r)}
              inputName={this.state.inputName}
              layoutName={this.state.layoutName}
              onChangeAll={(inputObj) => this.onChangeAll(inputObj)}
              onKeyPress={(button) => this.onKeyPress(button)}
              theme={"hg-theme-default myTheme1"}
              layout={{
                ip: [
                  "1 2 3",
                  "4 5 6",
                  "7 8 9",
                  ". 0 {clear}",
                  "{bksp} {close}",
                ],
                key: [
                  "q w e r t y u i o p {bksp}",
                  "a s d f g h j k l",
                  "z x c v b n m",
                  "{clear} {close}",
                ],
              }}
              display={{
                "{clear}": "C",
                "{bksp}": "&#129044",
                "{close}": "close keyboard",
              }}
              buttonTheme={[
                {
                  class: "hg-red",
                  buttons: "{close}",
                },
              ]}
            />
          </div>
        </Form>
      </div>
    );
  }
}

export default InputBeratPaket;
