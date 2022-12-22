import React from 'react';
import { Link } from 'react-router-dom';

const Profile = ({username, token}) => {
    
    return (
       
            <div>
                <div id="profile">
                    
                    
                    <h1>Welcome {`${username}`}!</h1>
                    <br></br>

                    <h2>Create a new post:</h2>
                    <button>Add Post</button>
                    <br></br>
                    <br></br>
    
                    <h2>You have Messages!</h2>
                </div>
            </div>
               
        )     
    }

             

export default Profile;