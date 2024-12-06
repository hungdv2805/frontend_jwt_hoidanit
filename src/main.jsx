import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

import RegisterPage from './pages/RegisterPage.jsx'

import UserPage from './pages/UserPage.jsx'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import HomePage from './pages/HomePage.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        path:true,
        element: <HomePage/>,
      },
      {
        path:"/user",
        element: <UserPage/>,
      }
    ]
  },
  {
    path:"/register",
    element: <RegisterPage/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
