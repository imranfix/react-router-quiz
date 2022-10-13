import './Quizs.css'
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { Toast } from 'react-bootstrap';



const Quizs = ({data}) => {
    const {question, options, correctAnswer } = data;

     const quizOptions = options;

     const handleAddIcon = ()=>{
      console.log(correctAnswer)
     }

     const handleOptions = (quizOptions)=>{
      if(quizOptions === correctAnswer){
        <Toast>Correct</Toast>
      }
     }
   

    return (
      
    
          <Card style={{ width: '28rem', marginBottom: '2rem', marginLeft: '28rem' }}>
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted text-start d-flex justify-content-center gap-2"><p><span className='fs-6'>Questions:</span> {question}</p>
          <FontAwesomeIcon onClick={()=> handleAddIcon()} icon={faEye}>

          </FontAwesomeIcon>
          </Card.Subtitle>

          <Card.Text className='option'> 
  
        {
            quizOptions.map(quizOption =>
             
      <level><input onClick={()=> handleOptions()} className="form-check-input" type="radio" name="flexRadioDefault"  id="flexRadioDefault2" checked></input>
        {quizOption}</level>
             )}
          
            </Card.Text>
         </Card.Body>
       </Card>
    );
};

export default Quizs;
