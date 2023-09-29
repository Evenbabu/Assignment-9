import React from 'react';
import './QuizSection.css'

const QuizSection = ({item}) => {
    console.log(item)
    const {name,logo,total} = item;

    return (
        <div className='quiz_detail'>
            <img src={logo} className='quiz_img' alt="" />
            <p>{name}</p>
            <p>Quiz Item: {total}</p>

        </div>
    );
};

export default QuizSection;