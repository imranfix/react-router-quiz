import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Show.css';


function Show ({data}) {
    const  {name, id,  logo} = data; 
      

  return (

         <Card style={{ width: '18rem' }}>
      <Card.Img className='img-top' variant="top" src={logo} />
      <Card.Body>
       <div className='d-flex justify-content-around'>
       <Card.Title>{name}</Card.Title>

       <Link to={`/home/${id}`}>
       <button  className='button'>Start quiz</button>
       </Link>
       
       </div>
      </Card.Body>
    </Card>
   
  );
}

export default Show;