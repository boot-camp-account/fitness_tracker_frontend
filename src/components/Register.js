
import React, { useState } from 'react';

const Register = ({username, password, setUsernameFromParent, setPasswordFromParent}) => {

    const handleSubmit = async () => {
            fetch('https://fitnesstrac-kr.herokuapp.com/api/users/register', {
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
                    alert(result.message)
                    document.getElementById("registration-form").reset();
                } else if (result.error) {
                    alert("Error", result.error)
                    document.getElementById("registration-form").reset();
                }
              })            
    }

    return (
        <div id="home">
            
            <h1>Registration:</h1>
            
            <div className='login-div'>
                <form id="registration-form" onSubmit={(event) => 
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