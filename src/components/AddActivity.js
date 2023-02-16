import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreatePost = ({token}) => {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const navigate = useNavigate();

    const createNewPost = async () => {
        try {
            const response = await fetch('https://fitnesstrac-kr.herokuapp.com/api/activities', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                   body: JSON.stringify({
                    post: {
                        name: title,
                        description: description,
                    },
                }),
            });
                alert("You have successfully created a new activity!");
                document.getElementById("new-post-form").reset();
                navigate('/activities');
                const result = await response.json();
            } catch (error) {
                console.error(error);
            }
    }
    
    return (
        <div id='login'>
            <div className='register-form bold'>

                <h1>Create A New Activity</h1>
                <form id="new-post-form" onSubmit={(event) => {
                event.preventDefault();
                createNewPost();
                }}>
                <br></br>
                <input type="text" placeholder="Name of New Activity" onChange={(event) => setTitle(event.target.value)} />
                <br></br>

                <br></br>
                <input type='text' placeholder="Description for New Activity" onChange={(event) => setDescription(event.target.value)} />
                <br></br>

                {/* <br></br>
                <input type='text' placeholder="Price for New Post" onChange={(event) => setPrice(event.target.value)} />
                <br></br> */}

                {/* <br></br>
                <input type='text' placeholder="Where is this Item located" onChange={(event) => setLocation(event.target.value)} />
                <br></br>
                <br></br> */}

                {/* <input type="checkbox" onChange={(event) => setWillDeliver(event.target.value)} />
                <label htmlFor="willDeliver">Are You Willing To Deliver?</label>
                <br></br>
                <br></br> */}
                <button type='submit'>Submit New Activity</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost;