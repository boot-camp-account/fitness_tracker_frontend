import React from 'react';

const baseURL = 'https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT'


const Profile = ({username, password, token}) => {
    
    const getUserData = async () => {
        
        fetch(`${baseURL}/users/me`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
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
            // console.log(result.success);
          })            
}

return (
       
    <div>
        <div id="profile">
            {
                token ? (
                    <div>
                        <h1>Welcome {`${username}`}!</h1>
                        <br></br>

                        <h2>Create a new post:</h2>
                        <button>Add Post</button>
                        <br></br>
                        <br></br>
        
                        <h2>You have Messages!</h2>
                        </div>
                    ) : (
                         <p>Sorry, you've reached a restricted page. Please login to view your profile</p>
                        )
                }
            </div>
        </div>
               
        )     
    }

export default Profile;