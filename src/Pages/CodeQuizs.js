import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CodeQuizs = () => {
    const quizs = useLoaderData().data;
    console.log(quizs)
   
    return (
        <div>
            <h3>This is codeQuizs</h3>
        </div>
    );
};

export default CodeQuizs;