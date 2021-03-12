import React, { useState } from "react";
import style from "./style.module.css";
import { Form, Button } from "react-bootstrap";

export default function PartWithColors() {
  const [red, setRed] = useState("255");
  const [green, setGreen] = useState("255");
  const [blue, setBlue] = useState("255");

  function handleChangeValue(e) {
    if (e.target.name == "red") {
      return setRed(e.target.value);
    } else if (e.target.name == "green") {
      return setGreen(e.target.value);
    } else setBlue(e.target.value);
  }

  return (
    <>
      <div className={style.conteiner}>
        <h2>Result</h2>

        <input
          type="text"
          className={style.box}
          value={`rgb(${red},${green},${blue})`}
        />
        <Form className={style.input}>
          <Form.Group>
            <Form.Label>Red</Form.Label>
            <Form.Control
              type="range"
              className={style.red}
              id={style.red}
              value={red}
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
              value={green}
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
              value={blue}
              min="0"
              max="255"
              name="blue"
              onChange={handleChangeValue}
            />
          </Form.Group>
        </Form>
        <div className={style.btns}>
          <Button className={style.textColor} variant="outline-success">
            Text color
          </Button>
          <Button variant="outline-warning">BG-Color</Button>
        </div>
      </div>

      <div
        className={style.text}
        style={{ background: `rgb(${red},${green},${blue})` }}
      >
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus vitae
        dolorum quisquam, deserunt recusandae harum earum inventore dolor labore
        magnam, aliquid sit. Aperiam, quidem ullam aliquid doloribus architecto
        sunt delectus.
      </div>
    </>
  );
}
