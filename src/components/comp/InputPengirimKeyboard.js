import Cookies from "js-cookie";
import React, { Component, useState } from "react";
import { Form } from "react-bootstrap";
import { render } from "react-dom";
import { BsArrowLeft } from "react-icons/bs";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "../screens/style.css";

class InputPengirimKeyboard extends Component {
  state = {
    layoutName: "key",
    inputName: "inputPengirim",
    input: {},
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
      layoutName: layoutName === "key" ? "shift" : "key",
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
    Cookies.set("pengirim", input.inputPengirim);
    Cookies.set("notelppengirim", input.inputNoPengirim);
    console.log(Cookies.get("pengirim"));

    return (
      <div>
        <Form style={{ fontSize: "25px" }}>
          <Form.Group controlId="formPengirim">
            <Form.Label>Pengirim :</Form.Label>
            <Form.Control
              onFocus={() => {
                this.setActiveInput("inputPengirim");
                this.setState({ layoutName: "key" });
              }}
              value={input["inputPengirim"] || ""}
              onChange={(e) => this.onChangeInput(e)}
              type="text"
              placeholder="Masukan Nama Pengirim "
              style={{ fontSize: "30px" }}
            />
          </Form.Group>

          <Form.Group
            controlId="form.TelpPengirim"
            style={{
              marginTop: "1.5rem",
            }}
          >
            <Form.Label>No Telp Pengirim :</Form.Label>
            <Form.Control
              onFocus={() => {
                this.setActiveInput("inputNoPengirim");
                this.setState({ layoutName: "ip" });
              }}
              value={input["inputNoPengirim"] || ""}
              onChange={(e) => this.onChangeInput(e)}
              type="text"
              placeholder="Masukan No Telpon Pengirim "
              style={{ fontSize: "30px" }}
            />
          </Form.Group>
          <div className={`keyboardContainer ${!keyboardOpen ? "hidden" : ""}`}>
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
                  "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                  "{clear} q w e r t y u i o p [ ] \\",
                  "{lock} a s d f g h j k l ; ' ",
                  "{shift} z x c v b n m , . / {shift}",
                  "{space} {close}",
                ],
                shift: [
                  "~ ! @ # $ % ^ &amp; * ( ) _ + {bksp}",
                  "{clear} Q W E R T Y U I O P { } |",
                  '{lock} A S D F G H J K L : "',
                  "{shift} Z X C V B N M &lt; &gt; ? {shift}",
                  "{space} {close}",
                  // "{close}",
                ],
              }}
              display={{
                "{clear}": "C",
                "{bksp}": "&#129044",
                "{close}": "close keyboard",
                "{lock}": "CapsLock",
                "{shift}": "shift",
                "{space}": "   space   ",
              }}
              buttonTheme={[
                {
                  class: "hg-red",
                  buttons: "{close}",
                },
                {
                  class: "hg-green",
                  buttons: "{clear}",
                },
              ]}
            />
          </div>
          <Form.Group
            controlId="formAlamat"
            style={{
              marginTop: "1.5rem",
            }}
          >
            <Form.Label>Alamat :</Form.Label>
            <Form.Control
              type="text"
              value="Sibox - Suppermall Karawaci"
              disabled
              style={{ fontSize: "30px" }}
            />
          </Form.Group>
        </Form>
      </div>
    );
  }
}

export default InputPengirimKeyboard;
