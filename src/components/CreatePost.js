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
                // console.log(response);
                // console.log(result);
            } catch (error) {
                console.error(error);
            }
    }
    
    return (
        <div id='login'>
            <div className='register-form bold'>
                <form onSubmit={(event) => {
                event.preventDefault();
                createNewPost();
                }}>
                <label>Please enter the Title of your post:</label>
                <br></br>
                <input
                type='text'
                onChange={(event) => setTitle(event.target.value)} />
                <br></br>

                <label>Please enter the Description of your post: </label>
                <br></br>
                <input
                type='text'
                onChange={(event) => setDescription(event.target.value)} />
                <br></br>

                <label>Please enter the Price of your post:</label>
                <br></br>
                <input
                type='text'
                onChange={(event) => setPrice(event.target.value)} />
                <br></br>

                <label>Please enter the Location of your post:</label>
                <br></br>
                <input
                type='text'
                onChange={(event) => setLocation(event.target.value)} />
                <br></br>

                <input type="checkbox" 
                onChange={(event) => setWillDeliver(event.target.value)} />
                <label htmlFor="willDeliver">Will Deliver?</label>
                <br></br>
                <button type='submit'>Submit New Post</button>
                </form>
            </div>
        </div>
    )
}

export default CreatePost;