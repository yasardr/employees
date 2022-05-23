import React, { useContext } from 'react';
import { HashRouter as Router,
         Routes,
         Route } from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';
import NavBar from '../components/NavBar';
import EmployeesPage from '../pages/EmployeesPage';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';

const AppRouter = () => {
    const {user} = useContext(AuthContext);

    return (
        <Router>
            <NavBar />
            <div className='container'>
                <Routes>
                    <Route path='/' element={<MainPage />} />
                    <Route 
                        path='/employees' 
                        element={<EmployeesPage isAuthenticate={user.logged} />} 
                    />
                    <Route path='/login' element={<LoginPage />} />
                    <Route 
                        path='*' 
                        element={<EmployeesPage isAuthenticate={user.logged} />}
                    />
                </Routes>
            </div>
        </Router>
    )
}

export default AppRouter;
