import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/AuthContext';
import { users } from '../data/users';
import { types } from '../types/types';

const LoginPage = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);
    const [login, setLogin] = useState(null);

    // Realiza el proceso de validación de Login
    const handleLogin = () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const user = users.filter(user => user.username === username && user.password === password);

        if (user.length > 0) {
            dispatch({ 
                type: types.login, 
                payload: {
                    name: username
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
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <label className="form-label">User</label>
                                <input type="text" onPaste={handleBlock} onCopy={handleBlock} className="form-control" id="username" required />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" onPaste={handleBlock} onCopy={handleBlock} className="form-control" id="password" required />
                            </div>
                            <div className='d-flex justify-content-end'>
                                <button
                                    type='submit'
                                    className='btn btn-primary'>
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