import React, { useState } from 'react';
import './Modal.css'
import ModalDetail from '../ModalDetail/ModalDetail';

const Modal = ({option, handalOptionSelect}) => {
    
    // const {} = option;
    return (
        
        
        
        <label htmlFor="">
                <div  className='quiz_list'>
                <input 
                type="radio"
                name='chose_option'
                value={option}
                
                onChange={()=>handalOptionSelect(option)}

                />

            {option}

        </div>
            </label>
            
    );
};

export default Modal;