import React from 'react';
import { BrowserRouter as Router,
         Routes,
         Route } from "react-router-dom";
import NavBar from './components/NavBar';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';

const AppRouter = () => {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path='/' element={<MainPage />} />
                <Route path='*' element={<NotFoundPage />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;
