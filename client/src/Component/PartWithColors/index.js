import React, { useState } from "react";
import style from "./style.module.css";
import { Form } from "react-bootstrap";
export default function PartWithColors() {
  const [value, setValue] = useState({
    red: "255",
    green: "255",
    blue: "255",
  });

  function handleChangeValue({ target: { name, value } }) {
    setValue({ ...value, [name]: value });
  }

  const { red, green, blue } = value;
  return (
    <div className={style.conteiner}>
      <h2>Result</h2>
      <input type="text" className={style.box} value="rgb(255,255,255)" />
      <Form className={style.input}>
        <Form.Group controlId="formBasicRange">
          <Form.Label>Red</Form.Label>
          <Form.Control
            type="range"
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
    </div>
  );
}
