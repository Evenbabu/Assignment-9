import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import './Statistics.css'
const Statistics = () => {
    const [quizData,setQuizData] = useState([])
    useEffect(()=>{
        fetch ('https://openapi.programming-hero.com/api/quiz')
        .then(res => res.json())
        .then(data=>setQuizData(data.data))
    },[])
    console.log(quizData)

    



    return (
        

        <div className='chart-container'>

            <ResponsiveContainer width="80%" height={500}> 


        <BarChart   data={quizData} style={{border: '2px solid white', padding:''}} >
            <XAxis dataKey={"name"} tick={{fill:'white'}} ></XAxis>
            <YAxis tick={{fill:'white'}}></YAxis>
            <Tooltip></Tooltip>
            <Legend ></Legend>
            
            <Bar dataKey={"total"} fill='#FFCD4B' ></Bar>
        </BarChart>
            </ResponsiveContainer>

        </div>
        
            
        
        

        
    );
};

export default Statistics;