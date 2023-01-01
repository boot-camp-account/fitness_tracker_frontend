import React, { useEffect, useState } from 'react';

const baseURL = 'https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT'


const Profile = ({username, password, token}) => {
    const [messages, setMessages] = useState([]);
    const [posts, setPosts] = useState([]);
    const [activePosts, setActivePosts] = useState('');
    
    useEffect(() => {
        fetch(`${baseURL}/users/me`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
            .then (response => response.json())
            .then (
                (result) => {
                    setPosts(result.data.posts);
                    setMessages(result.data.messages);
                    posts && posts.map((post) => {
                        setActivePosts(post.active);
                    })
                    // console.log(posts)
                    // console.log(result.data.posts);
                    // console.log(result);
              })             
}, [])

return (
       
    <div>
        <div id="profile">
            {
                token ? (
                    <div>
                        <h1>Welcome, {`${username}`}!</h1>
                        <br></br>
        
                        <h2>You have {`${posts.length}`} total Post(s).</h2>
                        <h2>You have {activePosts} active Post(s).</h2>
                        <h2>You have inactive Post(s).</h2>
                        <br></br>

                        <h2>You have received {`${messages.length}`} Messages.</h2>
                        <br></br>

                        <div>
                            <h3>Messages To Me:</h3>
                            <p>From User: {`${messages.username}`}</p>
                            <p>{`${messages.content}`}</p>
                        </div>

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