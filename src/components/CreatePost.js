import React from 'react';

const CreatePost = () => {
    return (
        <div>
            <form onSubmit={(event) => {
            event.preventDefault();
            addPost();
            }}>
            <label>Please enter Title</label>
            <br></br>
            <input
            type='text'
            onChange={(event) => setTitle(event.target.value)} />
            <br></br>

            <label>Enter Description </label>
            <br></br>
            <input
            type='text'
            onChange={(event) => setDescription(event.target.value)} />
            <br></br>

            <label>Enter Price</label>
            <br></br>
            <input
            type='text'
            onChange={(event) => setPrice(event.target.value)} />
            <br></br>

            <label>Enter Location</label>
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
    )
}

export default CreatePost;