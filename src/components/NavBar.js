import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { types } from "../types/types";

const NavBar = () => {
  const { user: {name}, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({
      type: types.logout
    });
    navigate('/');
  }
  
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
            <Link to="/" className="navbar-brand">Logo</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav me-auto mb-2 mb-lg-0">
                  <NavLink activeclassname="active" to="/" className="nav-link">Home</NavLink>
                  <NavLink activeclassname="active" to="/employees" className="nav-link">Employees</NavLink>
                  <NavLink activeclassname="active" to="/upload" className="nav-link">Upload</NavLink>
                  <NavLink activeclassname="active" to="/login" className="nav-link">Login</NavLink>
              </div>
              <ul className='navbar-nav ml-auto'>
                <li className='nav-item nav-link text-info'>
                  <span>{ name }</span>
                </li>
                <button 
                    className="nav-item nav-link btn"
                    onClick={ handleLogout }>Logout</button>
              </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavBar;
