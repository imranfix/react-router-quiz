import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Quizs from './Quizs';

const CodeQuizs = () => {
    const quizs = useLoaderData().data;
    const {name, id, questions} = quizs;
      console.log(quizs);

    const datas = questions;

    return (
        <div className='text-center me-5'>
            <div>
            <h3>The quiz section is : {name}</h3>
            </div>
            <h5>Quiz Part: {id} </h5>

            {
                datas.map((data) => <Quizs
                data={data}
                ></Quizs>)
            }

        </div>
    );
};

export default CodeQuizs;