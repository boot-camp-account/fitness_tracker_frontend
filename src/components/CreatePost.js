import React from 'react';
import { useState } from 'react';

const CreatePost = ({token}) => {
const [title, setTitle] = useState('');
const [description, setDescription] = useState('');
const [location, setLocation] = useState('');
const [price, setPrice] = useState('');
const [willDeliver, setWillDeliver] = useState('');

    const createNewPost = async () => {
        try {
            const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/posts', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                   body: JSON.stringify({
                    post: {
                    title: title,
                    description: description,
                    price: price,
                    willDeliver: true
                    },
                    }),
                });
                alert("You have successfully submitted a new post!");
                const result = await response.json();
            } catch (error) {
                console.error(error);
            }
    }
    
    return (
        <div id='login'>
            <div className='register-form bold'>

                <h1>Add A New Post</h1>
                <form onSubmit={(event) => {
                event.preventDefault();
                createNewPost();
                }}>
                <br></br>
                <input type="text" placeholder="Title of New Post" onChange={(event) => setTitle(event.target.value)} />
                <br></br>

                <br></br>
                <input type='text' placeholder="Description for New Post" onChange={(event) => setDescription(event.target.value)} />
                <br></br>

                <br></br>
                <input type='text' placeholder="Price for New Post" onChange={(event) => setPrice(event.target.value)} />
                <br></br>

                <br></br>
                <input type='text' placeholder="Where is this Item located" onChange={(event) => setLocation(event.target.value)} />
                <br></br>
                <br></br>

                <input type="checkbox" onChange={(event) => setWillDeliver(event.target.value)} />
                <label htmlFor="willDeliver">Are You Willing To Deliver?</label>
                <br></br>
                <br></br>
                <button type='submit'>Submit New Post</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost;