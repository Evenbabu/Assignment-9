import React from 'react';
import { useLoaderData } from 'react-router-dom';
import QuizDetails from '../QuizDetails/QuizDetails';
import './Quiz.css'
const Quiz = () => {
    const data = useLoaderData();
    const quizData = data.data.questions;
    // console.log(quizData);
    return (
        <div className='quiz_container'>
            <h1 className='name_quiz'>Quiz of {data.data.name}</h1>
            {
                quizData.map((quiz)=><QuizDetails 
                key={quiz.id}
                quiz={quiz}
                ></QuizDetails>)
            }
        </div>
    );
};

export default Quiz;