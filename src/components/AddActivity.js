import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postActivities } from '../api';

const AddActivity = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const result = await postActivities(name, description);

        if (result.error) {
            document.getElementById('new-post-form').reset();
            alert("Error: " + result.message)
        } else if (result.id) {
            alert('You have successfully created a new activity!');
            document.getElementById('new-post-form').reset();
            navigate('/activities');
        }
    };

    return (
        <div id="login">
            <div className='register-form'>
                <form id="new-post-form" onSubmit={handleSubmit}>
                    <h1>Create New Activity</h1>
                    <br></br>
                    <input
                        type='text'
                        id='nameActivity'
                        required
                        placeholder='New Activity Name'
                        onChange={(event) => setName(event.target.value)}
                    />
                    <br></br>
                    <br></br>
                    <input
                        type='text'
                        id='goalActivity'
                        required
                        placeholder='New Activity Description'
                        onChange={(event) => setDescription(event.target.value)}
                    />
                    <br></br>
                    <br></br>
                    <button type='submit'>
                        Add Activity
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddActivity;