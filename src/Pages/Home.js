import quiz2 from './quiz2.png';
import './Home.css';
import { useLoaderData } from 'react-router-dom';
import Show from './Show';

const Home = () => {
    const datas = useLoaderData().data;
    // console.log(datas);

 

    return (
    
        <div>
        <div className='image-container'>
             <img className='img-set' src={quiz2} alt=""></img>
         </div>

           <div className='display'>
           {
                datas.map(data => <Show
                data={data}
                ></Show>)
              }
           </div>
        </div>
    );
};

export default Home;

