import { Button, Form } from "react-bootstrap";
import ColorGroup from "./ColorGroup";
import { useState } from "react";
import { createPortal } from "react-dom";

const FormColor = () => {
  const [color, setColor] = useState("");
  const [colores, setColores] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setColores([...colores, color]);
    setColor("");
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex" controlId="inputColor">
          <Form.Control
            type="text"
            placeholder="Ingrese un color en inglés. Ej: Blue"
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form.Group>
      </Form>
      <ColorGroup />
    </>
  );
};

export default FormColor;
