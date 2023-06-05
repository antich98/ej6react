import { Button, Card, CardGroup } from "react-bootstrap";


function ColorGroup() {
  return (
    <CardGroup>
      <Card>
        <Card.Body>
          <Card.Title>Nombre color</Card.Title>
        </Card.Body>
        <Card.Footer>
          <Button variant="danger">Borrar</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Nombre color</Card.Title>
        </Card.Body>
        <Card.Footer>
          <Button variant="danger">Borrar</Button>
        </Card.Footer>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Nombre color</Card.Title>
        </Card.Body>
        <Card.Footer>
          <Button variant="danger">Borrar</Button>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default ColorGroup;
