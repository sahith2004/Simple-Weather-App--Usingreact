import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Cardcomponent({title,info,unit}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        
        <Button variant="primary">{info} {unit}</Button>
      </Card.Body>
    </Card>
  );
}

export default Cardcomponent;