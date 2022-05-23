import React, { useEffect, useReducer } from 'react';
import AppRouter from './routes/AppRouter';
import { AuthContext } from "./auth/AuthContext";
import { authReducer } from './auth/authReducer';

// Revisa si existe un usuario en el localStorage para tener el estado inicial
const init = () => {
    return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

const App = () => {
    const [user, dispatch] = useReducer(authReducer, {}, init);

    // Guarda el user en localStorage 
    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(user));
    }, [user]);
    
    
    return (
        <AuthContext.Provider value={{ user, dispatch }}>
            <AppRouter />
        </AuthContext.Provider>
    )
}

export default App;
