import React, { useState } from 'react';
import{ FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-regular-svg-icons'
import './QuizDetails.css'
import Modal from '../Modal/Modal';

const QuizDetails = ({quiz}) => {
    const [modal,setModal] = useState(true);
    // const [selectedOption, setSelectedOption] = useState(null)
    const [isCorrect,setIsCorrect] = useState()

    const {id,question,options,correctAnswer} =quiz;

    

    const closeModal = ()=>{
        console.log('close button')
        setModal(false);
    };

    const openModal = ()=>{
        setModal(true)
    }



    const handalOptionSelect =(option)=>{
        openModal();
        if(correctAnswer === option){
            setIsCorrect(true);
        }
        else{
            setIsCorrect(false);
        }
    };

    const getCorrectAnswer = (ans) =>{
        // console.log('get Console',ans)
        alert(`${ans}`)
    }

    return (
        
            <div className='quiz_detail_container'>
           <div className='qus-eye'>
           <p className='qus'><b>Qusestion:</b> {question}</p>
           <FontAwesomeIcon onClick={()=>getCorrectAnswer(correctAnswer)} icon={faEye} className='eye'/>           </div>
            <div className='quiz_option'>
               {
                options.map((option, index)=><Modal 
                key={index}
                option={option}
                handalOptionSelect={handalOptionSelect}
                ></Modal>)
               }
              {
              isCorrect === true && 
              <div className={`modal ${modal? '' : 'disable'}`}>
                <h2>Congratulations! Your answer is correct.</h2>
                <button onClick={closeModal}> Close</button>
                </div>
              
              }
              {
                isCorrect === false && 
                <div className={`modal ${ modal? '' : 'disable'}`}>
                  <h2>Sorry Your Answer is Wrong.</h2>
                  <button onClick={()=>closeModal()}>Close</button>
                  </div>
              }
              
            </div>
            
               

            
            </div>
        
    );
};

export default QuizDetails;