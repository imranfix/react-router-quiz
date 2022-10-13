import './Quizs.css';
import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import toast from 'react-hot-toast';


const Quizs = ({data}) => {
    const {question, options, correctAnswer } = data;
     const quizOptions = options;



        const handleAddIcon = ()=>{
        console.log(correctAnswer)
        toast(correctAnswer);
        
     }


     const handleOptions = (quizOptions)=>{
      if( quizOptions === correctAnswer){
        console.log('correct')
        toast.success('Correct answer')
        
      }
      else{
        console.log('Select incorrect')
        toast.error('Wrong answer')
      }

     }
  



    return (
    <div >
      
      <div className='card1'>
      <Card style={{ width: '28rem', marginBottom: '2rem', marginLeft: '28rem' }}>
          <div>
          <Card.Body >
      <Card.Subtitle className="mb-2 text-muted text-start d-flex justify-content-center gap-2"><p><span className='fs-6'>Questions:</span> {question}</p>
      <FontAwesomeIcon onClick={()=> handleAddIcon()} icon={faEye}>

        </FontAwesomeIcon>
      </Card.Subtitle>

          <Card.Text className='option'> 
  
        {
            quizOptions.map((quizOption) =>

              <level><input onClick={()=> handleOptions(quizOption)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked></input>
              {quizOption}</level>  

             )} 
          
            </Card.Text>
         </Card.Body>
          </div>
       </Card>
      </div>
    </div>
    );
};

export default Quizs;
