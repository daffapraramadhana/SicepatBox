import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { render } from "react-dom";
import { BsArrowLeft } from "react-icons/bs";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "../screens/style.css";
import FormProvinsi from "./FormProvinsi";
import FormProvinsi2 from "./FormProvinsi2";
import Cookies from "js-cookie";

class InputPengirimKeyboard extends Component {
  state = {
    layoutName: "key",
    inputName: "inputAlamatPenerima",
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
    let { input, keyboardOpen, submittedData } = this.state;
    Cookies.set("alamatpenerima", input.inputAlamatPenerima);

    return (
      <div>
        <Form style={{ fontSize: "25px" }}>
          <Form.Group controlId="formAlamatPenerima">
            <Form.Label>Alamat Penerima :</Form.Label>
            <Form.Control
              onFocus={() => {
                this.setActiveInput("inputAlamatPenerima");
                this.setState({ layoutName: "key" });
              }}
              value={input["inputAlamatPenerima"] || ""}
              onChange={(e) => this.onChangeInput(e)}
              as="textarea"
              rows="3"
              placeholder="Masukan Alamat Penerima "
              style={{ fontSize: "30px" }}
            />
            <div
              className={`keyboardContainerPenerimaLanjut ${
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
                    "{space}   {close}",
                    // "{close}",
                  ],
                }}
                display={{
                  "{clear}": "Clear",
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
                ]}
              />
            </div>
          </Form.Group>

          <FormProvinsi2 />
        </Form>
      </div>
    );
  }
}

export default InputPengirimKeyboard;
