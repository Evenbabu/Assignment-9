import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './componetns/Header/Header'
import Main from './Layout/Main'
import Home from './componetns/Home/Home'
import Quiz from './componetns/Quiz/Quiz'
import ContactUs from './componetns/Contact us/ContactUs'
import About from './componetns/About/About'
import NavLink from './Layout/NavLink'
import Blog from './componetns/Blog/Blog'

function App() {
const router = createBrowserRouter([
  {path:'/', element:<Main></Main>,
  children:[
  {path: '/home',
  element:<Home></Home>,
  loader:async()=>{
    const data = await fetch('https://openapi.programming-hero.com/api/quiz')
    return data;
  }

},
  
]},
{path:'/',element:<NavLink></NavLink>,children:[
  {path:'/quiz', element:<Quiz></Quiz>},
  {path:'/contact', element:<ContactUs></ContactUs>},
  {path: '/about', element:<About></About>},
  {path:'/blog', element:<Blog></Blog>}
]}
  // {path:'/', element:<Header></Header>}
])

  return (
   
    <>

      <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
      </React.StrictMode>
    </>
  )
}

export default App
