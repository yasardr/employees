import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const EmployeesPage = ({isAuthenticate}) => {
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!isAuthenticate) {
            navigate('/');
        }
    }, []);
    
  return (
    <div>EmployeesPage</div>
  )
}

export default EmployeesPage;