import { createContext, useState } from 'react'

export const AuthContext =  createContext({
    isAuthenticated: false, 
    user:{
        email: '',
        name: ''
    },
    loading: true
})
export const AuthWrapper = (props) => {
    const [auth, setAuth] = useState({
        isAuthenticated: false, 
        user:{
            email: '',
            name: ''
        }
    })

    const [loading, setLoading] = useState(true)

    return ( 
        <AuthContext.Provider value={{ auth, setAuth, loading, setLoading }}>
            {props.children}
        </AuthContext.Provider>
    );
}

