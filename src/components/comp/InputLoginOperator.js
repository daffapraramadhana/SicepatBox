import React, { Component } from "react";
import { Form, Container, Row, Col } from "react-bootstrap";
import { render } from "react-dom";
import { BsArrowLeft } from "react-icons/bs";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";
import "../screens/style.css";
import Cookies from "js-cookie";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

class InputLoginOperator extends Component {
  state = {
    layoutName: "key",
    inputName: "inputUsername",
    input: "",
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

    return (
      <div>
        <Container
          style={{
            marginTop: "5rem",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            display: "flex",
          }}
        >
          <Row>
            <Col>
              <Form.Group controlId="formPenerima">
                <Form.Label>Username :</Form.Label>
                <Form.Control
                  onFocus={() => {
                    this.setActiveInput("inputUsername");
                    this.setState({ layoutName: "key" });
                  }}
                  value={input["inputUsername"] || ""}
                  onChange={(e) => this.onChangeInput(e)}
                  type="text"
                  placeholder="Username "
                  style={{ fontSize: "30px" }}
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group
                controlId="form.TelpPenerima"
                // style={{
                //   marginTop: "1.5rem",
                // }}
              >
                <Form.Label>Password :</Form.Label>
                <Form.Control
                  onFocus={() => {
                    this.setActiveInput("inputPassword");
                    this.setState({ layoutName: "key" });
                  }}
                  value={input["inputPassword"] || ""}
                  onChange={(e) => this.onChangeInput(e)}
                  type="text"
                  placeholder="Password "
                  style={{ fontSize: "30px" }}
                />
              </Form.Group>
            </Col>
            <button
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50px",
                // fontSize: "20px",
                backgroundColor: "#CD2028",
                borderColor: "#CD2028",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "auto",
                marginLeft: "2rem",
                marginTop: "30px",
              }}
            >
              <FaArrowRight
                style={{
                  margin: "auto",
                  height: "2rem",
                  width: "3rem",
                  color: "white",
                }}
              />
            </button>
          </Row>
        </Container>
        <div
          className={`keyboardContainerPenerima ${
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
              ip: ["1 2 3", "4 5 6", "7 8 9", "{clear} 0 {close}"],
              key: [
                "` 1 2 3 4 5 6 7 8 9 0 - = {bksp}",
                "q w e r t y u i o p [ ] \\",
                "{lock} a s d f g h j k l ; '",
                "z x c v b n m , . /",
                "{clear} {space} {close}",
              ],
              shift: [
                "~ ! @ # $ % ^ &amp; * ( ) _ + {bksp}",
                "Q W E R T Y U I O P { } |",
                '{lock} A S D F G H J K L : "',
                "Z X C V B N M &lt; &gt; ?",
                "{clear} {space} {close}",
                // "{close}",
              ],
            }}
            display={{
              "{clear}": "&#9003;",
              "{bksp}": "&#129044",
              "{close}": "&#128505;",
              "{lock}": "	&#8682;",
              "{shift}": "&#8679;",
              "{space}": "   spasi   ",
            }}
            buttonTheme={[
              {
                class: "hg-green",
                buttons: "{close}",
              },
              {
                class: "hg-yellow",
                buttons: "{clear}",
              },
            ]}
          />
        </div>
      </div>
    );
  }
}

export default InputLoginOperator;
