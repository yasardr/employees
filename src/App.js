import React from 'react';
import AppRouter from './AppRouter';
import { EmployeeContext } from "./EmployeeContext";

const App = () => {
    const employee = {
        id: 123,
        name: 'Juan',
        emial: 'atorresz@gmail.com'
    }
    
    return (
        <EmployeeContext.Provider value={employee}>
            <AppRouter />
        </EmployeeContext.Provider>
    )
}

export default App;
