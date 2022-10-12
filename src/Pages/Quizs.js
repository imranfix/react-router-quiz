import React from 'react';
import './Quizs.css'

const Quizs = ({data}) => {
    const {question, options } = data;

    const quizOptions = options;

    return (
        <div className='border rounded border-info mb-3 w-50'>
            <p><span className='fs-2'>Questions:</span> {question}</p>
            {
            quizOptions.map(quizOption =>  <label className='flex'><input className='radio' type='radio'></input>{quizOption}</label>)

            }

        </div>
    );
};

{/* <p><span className='fs-2'>Options: </span>{quizOption}</p> */}

export default Quizs;