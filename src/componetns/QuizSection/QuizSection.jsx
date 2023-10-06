import React from 'react';
import './QuizSection.css'
import { Link } from 'react-router-dom';

const QuizSection = ({item,getQuiz}) => {
    // console.log(item)
    const {id,name,logo,total} = item;

    

    return (
        <div className='quiz_detail'>
    
            <img src={logo} className='quiz_img' alt="" />
        
        <div className='quiz_name'>
            <div>
               <p>{name}</p>
               <p>Quiz Item: {total}</p>
            </div>

                {/* <button onClick={()=>getQuiz(`/quiz/${id}`)} className='quiz_btn'>Quiz</button>
                 */}
                 <Link to={`/quiz/${id}`} className='quiz_btn'>Quiz</Link>
         </div>
        </div>
    );
};

export default QuizSection;