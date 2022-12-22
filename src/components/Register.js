import React, { useState } from 'react';

const baseURL = 'https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT'


const Register = ({username, password, setTokenFromParent, setUsernameFromParent, setPasswordFromParent}) => {

    const handleSubmit = async () => {
            fetch(`${baseURL}/users/register`, {
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
                    alert("You have successfully registered! Please login using your registration credentials")
                } else if (result.error.message) {
                    alert("This account has already been registered. Please login or try a different username")
                }
              })            
    }

    return (
        <div id="home">
            
            <h1>Registration:</h1>
            
            <div className='login-div'>
                <form onSubmit={(event) => 
                    {event.preventDefault(); 
                    handleSubmit(); }}>
                
                <label className='bold'>Please enter your desired username:</label><br></br>
                <input type='text'onChange={(event) => setUsernameFromParent(event.target.value)}/>
                <br></br>
                <br></br>

                <label className='bold'>Please enter your desired password:</label>
                <br></br>

                <input type='password'onChange={(event) => setPasswordFromParent(event.target.value)}/>
                <br></br>
                <br></br>

                <button type='submit'>Submit</button>
                </form>
            </div>

         </div>
)
}

export default Register;