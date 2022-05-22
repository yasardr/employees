import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { types } from '../types/types';

const LoginPage = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);
    const [login, setLogin] = useState(null);

    // Realiza el proceso de validación de Login
    const handleLogin = () => {
        const username = document.getElementById('username');
        const password = document.getElementById('password');

        if (username.value && password.value) {
            dispatch({ 
                type: types.login, 
                payload: {
                    name: username.value
                }
            });
            navigate('/employees');
        } else {
            setLogin(false);
        } 
    }

    const handleBlock = e => {
        e.preventDefault();
    }

    return (
        <div className='container mt-3'>
            <div className='row d-flex justify-content-center'>
                <div className="card col-sm-12 col-md-6">
                    <div className="card-body">
                        <h1>Login</h1>
                        <hr />
                        {
                            login != null && !login
                            ? 
                                <div className="alert alert-danger" role="alert">
                                    User or password invalid!
                                </div>
                            :   
                                <></>
                        }
                        <form>
                            <div className="mb-3">
                                <label className="form-label">User</label>
                                <input type="text" onPaste={handleBlock} onCopy={handleBlock} className="form-control" id="username" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" onPaste={handleBlock} onCopy={handleBlock} className="form-control" id="password" />
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button
                                    className='btn btn-primary'
                                    onClick={handleLogin}>
                                    Login
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginPage;