import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const baseURL = 'https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT'


const Login = ({username, password, setTokenFromParent, setUsernameFromParent, setPasswordFromParent}) => {
    const navigate = useNavigate();

    const handleLogin = async () => {
        
        fetch(`${baseURL}/users/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user: {
                    username: `${username}`,
                    password: `${password}`
                }
            })
        }).then (response => response.json())
          .then (result => {
            console.log(result);
            console.log(result.success);

            if (result.success) {
                setTokenFromParent(result.data.token);
                window.localStorage.setItem('token', result.data.token);
                navigate('/profile');
            } else if (result.error.message) {
                alert("This account has already been registered. Please login or try a different username")
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