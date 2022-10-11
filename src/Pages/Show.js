import Card from 'react-bootstrap/Card';
import './Show.css';

function Show({data}) {
    const  {name,  logo} = data;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={logo} />
      <Card.Body>
       <div className='d-flex justify-content-around'>
       <Card.Title>{name}</Card.Title>
        <button className='button'>Start quiz</button>
       </div>
      </Card.Body>
    </Card>
  );
}

export default Show;