import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Item({prod}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={prod.img} />
      <Card.Body>
        <Card.Title>{prod.name}</Card.Title>
        <Card.Text>
          {prod.description}
        </Card.Text>
        <Card.Text>
          ${prod.price} UYU
        </Card.Text>
        <Card.Text>
          Stock: {prod.stock}
        </Card.Text>
        <Button variant="primary">Ver más...</Button>
      </Card.Body>
    </Card>
  );
}

export default Item;
