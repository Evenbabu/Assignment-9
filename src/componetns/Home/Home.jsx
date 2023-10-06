import React from 'react';
import './Home.css'
import { useLoaderData } from 'react-router-dom';
import QuizSection from '../QuizSection/QuizSection';

const Home = () => {
    const apiLink = useLoaderData();
    const data = apiLink.data; // Assuming apiLink.data is already an array

    // console.log(data);

    const getQuiz = itemId=>{
        console.log(itemId)
    }

    return (
        <div>
            <div className='quiz_item'>
            {
                data.map(item => (<QuizSection 
                    key={item.id}
                     item={item}
                     getQuiz={getQuiz}
                     ></QuizSection>))                   
            }
            </div>
        </div>
    );
};

export default Home;
