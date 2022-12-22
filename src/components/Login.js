import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div id="login">
            <div className='login-div'>
                <form className="login">
                    <h2>Log in</h2>
                    <br></br>

                    <input type="text" placeholder="Username*"/>
                    <br></br>
                    <br></br>

                    <input type="password" placeholder="Password*" />
                    <br></br>
                    <br></br>

                    <button>Log In</button>
                    <br></br>
                    <br></br>
                    <p>Not a Member? <Link to="/register">Register</Link></p>
                </form>
            </div>
        </div>
    )
}

export default Login;