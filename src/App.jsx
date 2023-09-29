import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import './App.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Header from './componetns/Header/Header'

function App() {
const router = createBrowserRouter([
  {path:'/', element:<Header></Header>}
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
