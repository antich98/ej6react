import { Button, Form } from "react-bootstrap";
import ColorGroup from "./ColorGroup";


const FormColor = () => {
  return (
    <>
    <Form>
      <Form.Group className="mb-3 d-flex" controlId="inputColor">
        <Form.Control type="text" placeholder="Ingrese un color en inglés. Ej: Blue" />
        <Button variant="primary">Guardar</Button>
      </Form.Group>
    </Form>
    <ColorGroup/>
    </>
  );
};

export default FormColor;
