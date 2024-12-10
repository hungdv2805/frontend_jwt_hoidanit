import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/global.css'

import RegisterPage from './pages/RegisterPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import UserPage from './pages/UserPage.jsx'

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom"
import HomePage from './pages/HomePage.jsx'
import { AuthWrapper } from './components/context/auth.context.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <App />,
    children: [
      {
        index:true,
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
  },
  {
    path:"/login",
    element: <LoginPage/>,
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper>
  </React.StrictMode>,
)
