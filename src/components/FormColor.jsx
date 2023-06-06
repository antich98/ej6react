import { Button, Form } from "react-bootstrap";
import ColorGroup from "./ColorGroup";
import { useState, useEffect } from "react";

const FormColor = () => {
  let coloresDelLocalStorage = JSON.parse(localStorage.getItem("arrayColores")) || [];
  const [color, setColor] = useState("");
  const [colores, setColores] = useState(coloresDelLocalStorage);
  useEffect(() => {
    localStorage.setItem("arrayColores", JSON.stringify(colores));
  }, [colores]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setColores([...colores, color]);
    setColor("");
  };
  const borrarColor = (nombreColor) => {
    let copiaColores = colores.filter((itemColor) => itemColor !== nombreColor);
    setColores(copiaColores);
  }
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
      <ColorGroup colores={colores} borrarColor={borrarColor}></ColorGroup>
    </>
  );
};

export default FormColor;
