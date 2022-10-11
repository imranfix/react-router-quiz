import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import './Show.css';

function Show({data}) {
    const  {name,  logo} = data;

    const test = useLoaderData();
    console.log(test)
   
    const handleAddQuiz = ()=>{
       
    }
   

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img className='img-top' variant="top" src={logo} />
      <Card.Body>
       <div className='d-flex justify-content-around'>
       <Card.Title>{name}</Card.Title>
        <button onClick={()=>handleAddQuiz()} className='button'>Start quiz</button>
       </div>
      </Card.Body>
    </Card>
  );
}

export default Show;