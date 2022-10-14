import quiz2 from './quiz2.png';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import Show from './Show';

const Home = () => {
    const datas = useLoaderData().data;
    // console.log(datas);

 

    return (
    
    <div className='mt-3'>
        <div className='image-container d-flex'>
        <p className='me-5 mt-1 p-3'><span className='fs-2'>Let's</span> start the programming language quizs and developed your programming knowledge quickly. You can easily justify your theoryticl coding knowledge. <br /> <br /> <br /> “How do I make a programming quiz?” is one of the most common questions asked by people learning web development, and for good reason. Quizzes are fun!</p>
             <img className='img-set ms-4 rounded-2' src={quiz2} alt=""></img>
         </div>

           <div className='display'>
           {
                datas.map(data => <Show
                // key={data.id}
                data={data}
                ></Show>)
              }
           </div>
        </div>
    );
};

export default Home;

