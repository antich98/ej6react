import { Button, Card, CardGroup } from "react-bootstrap";

const ColorGroup = ({colores}) => {
  return (
    <>
      {
      colores.map((color, indiceColor) => 
        <Card key={indiceColor} className="text-center text-light" style={{ backgroundColor: color }}>
          <Card.Body>
            <Card.Title>{color}</Card.Title>
          </Card.Body>
          <Card.Footer>
            <Button variant="danger">Borrar</Button>
          </Card.Footer>
        </Card>
      )
      }
    </>
  );
};

export default ColorGroup;
