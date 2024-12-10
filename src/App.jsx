import { useState, useEffect, setAuth, useContext } from 'react'
import axios from './ultil/axios.custommize'
import Header from './components/layout/Header'
import {Outlet } from'react-router-dom'
import { AuthContext } from './components/context/auth.context'
import { Spin } from 'antd'

function App() {

  const { setAuth, loading ,setLoading } = useContext(AuthContext)

  useEffect(() =>{
    const fetchAccount = async() =>{

      setLoading(true)

      const response = await axios.get(`/v1/api/account`)
      if(response && !response.message){
        setAuth({
          isAuthenticated :true,
          user:{
            email: response.email,
            name: response.name,
          }
        })
      }
      setLoading(false)
    }
    fetchAccount()
  },[])
  return (
    <>
      { loading ?
        <div style={{
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10000,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <Spin size="large" />
        </div>
        :
        <>
          <Header />
          <Outlet/>
        </>
      }
    </>
  )
}

export default App
