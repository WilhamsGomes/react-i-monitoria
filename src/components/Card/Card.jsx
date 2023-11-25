/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cards(props) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.evento.photo}/>
      <Card.Body>
        <Card.Title>{props.evento.nome}</Card.Title>
        <Card.Text>
        {props.evento.descricao}
        </Card.Text>
        <Button variant="primary">Se inscreva</Button>
      </Card.Body>
    </Card>
  );
}

export default Cards;