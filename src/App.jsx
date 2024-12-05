import { useState, useEffect } from 'react'
import axios from './ultil/axios.custommize'

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
      Hello world!
    </>
  )
}

export default App
