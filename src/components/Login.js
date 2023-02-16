import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const baseURL = 'http://fitnesstrac-kr.herokuapp.com/api/users/login'


const Login = ({username, password, setTokenFromParent, setUsernameFromParent, setPasswordFromParent}) => {
    const navigate = useNavigate();

    const handleLogin = async () => {
        
        fetch(`${baseURL}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: `${username}`,
                password: `${password}`
            })
        }).then (response => response.json())
          .then (result => {

            if (result.message) {
                setTokenFromParent(result.token);
                window.localStorage.setItem('token', result.token);
                navigate('/myroutines');
            } else if (result.error) {
                alert(result.error)
            }
          })            
}
    return (
        <div id="login">
            <div className='login-div'>
                <form className="login" onSubmit={(event) => 
                {event.preventDefault();
                handleLogin(); }}>
                    <h2>Log in</h2>
                    <br></br>

                    <input type="text" placeholder="Username*" onChange={(event) => setUsernameFromParent(event.target.value)}/>
                    <br></br>
                    <br></br>

                    <input type="password" placeholder="Password*" onChange={(event) => setPasswordFromParent(event.target.value)}/>
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