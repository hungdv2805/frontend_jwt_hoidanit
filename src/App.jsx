import { useState, useEffect } from 'react'
import axios from './ultil/axios.custommize'
import Header from './components/layout/Header'

import {Outlet } from'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() =>{
    const fetchHelloWorld = async() =>{
      const response = await axios.get(`/v1/api/`)
      console.log(response)
    }
    fetchHelloWorld()
  },[])
  return (
    <>
     <Header />
     <Outlet/>
    </>
  )
}

export default App
