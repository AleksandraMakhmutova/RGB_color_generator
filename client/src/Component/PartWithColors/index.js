import { useState } from "react";
import style from "./style.module.css";
import { Form, Button } from "react-bootstrap";
import text from "./text.js";

export default function PartWithColors() {
  const [red, setRed] = useState("255");
  const [green, setGreen] = useState("255");
  const [blue, setBlue] = useState("255");

  const [redText, setRedText] = useState("0");
  const [greenText, setGreenText] = useState("0");
  const [blueText, setBlueText] = useState("0");

  const [textColor, setTextColor] = useState(null);
  const [bgColor, setBgColor] = useState(true);

  function handleChangeValue(e) {
    if (e.target.name == "red") {
      if (textColor) {
        setRedText(e.target.value);
      } else setRed(e.target.value);
    } else if (e.target.name == "green") {
      if (textColor) {
        setGreenText(e.target.value);
      } else setGreen(e.target.value);
    } else if (e.target.name == "blue") {
      if (textColor) {
        setBlueText(e.target.value);
      } else setBlue(e.target.value);
    }
  }

  function handleChangeBtnColor(e) {
    e.preventDefault();
    if (e.target.id == "textColor") {
      setTextColor(true);
      setBgColor(null);
    } else {
      setTextColor(null);
      setBgColor(true);
    }
  }

  return (
    <>
      <div className={style.conteiner}>
        <h2>Result</h2>

        <input
          type="text"
          className={style.box}
          value={
            textColor
              ? `rgb(${redText},${greenText},${blueText})`
              : `rgb(${red},${green},${blue})`
          }
        />
        <Form className={style.input}>
          <Form.Group>
            <Form.Label>Red</Form.Label>
            <Form.Control
              type="range"
              className={style.red}
              id={style.red}
              value={textColor ? redText : red}
              name="red"
              min="0"
              max="255"
              onChange={handleChangeValue}
            />
          </Form.Group>
        </Form>
        <Form className={style.input}>
          <Form.Group controlId="formBasicRange">
            <Form.Label>Green</Form.Label>
            <Form.Control
              type="range"
              id={style.green}
              value={textColor ? greenText : green}
              min="0"
              max="255"
              name="green"
              onChange={handleChangeValue}
            />
          </Form.Group>
        </Form>
        <Form className={style.input}>
          <Form.Group controlId="formBasicRange">
            <Form.Label>Blue</Form.Label>
            <Form.Control
              type="range"
              id={style.blue}
              value={textColor ? blueText : blue}
              min="0"
              max="255"
              name="blue"
              onChange={handleChangeValue}
            />
          </Form.Group>
        </Form>
        <div className={style.btns}>
          <Button
            className={style.textColor}
            id="textColor"
            variant="outline-success"
            onClick={handleChangeBtnColor}
          >
            Text color
          </Button>

          <Button
            id="bgColor"
            variant="outline-warning"
            onClick={handleChangeBtnColor}
          >
            BG-Color
          </Button>
        </div>
      </div>

      {textColor ? (
        <div
          className={style.conteinerText}
          style={{ background: `rgb(${red},${green},${blue})` }}
        >
          <p
            className={style.text}
            style={{ color: `rgb(${redText},${greenText},${blueText})` }}
          >
            {text}
          </p>
        </div>
      ) : (
        <div
          className={style.conteinerText}
          style={{ background: `rgb(${red},${green},${blue})` }}
        >
          <p
            className={style.text}
            style={{ color: `rgb(${redText},${greenText},${blueText})` }}
          >
            {text}
          </p>
        </div>
      )}
    </>
  );
}
