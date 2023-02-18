import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { getActivities, updateActivityDescription } from '../api';

const Activities = ({token, setActivityIdFromParent}) => {
    const [activities, setActivities] = useState([]);
    const navigate = useNavigate();

    const navigateToNewPostForm = async () => {
        navigate('/activities/addactivity');           
        };

    const getActivitiesInfo = async () => {
        try {
            const result = await getActivities();
            if (result) {
                setActivities(result);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getActivitiesInfo();
    }, [activities]);

    return (
        <div id="posts">
            {
                token ? (
                    <div>
                        <div className='post-div'>
                            <h2>Would you like to create a new Activity?</h2>
                            <button onClick={navigateToNewPostForm}>Create New Activity</button>
                        </div>
                        <div>
                            <h2>Currently Active Activities:</h2>
                        </div>
                    </div>
                ) : (
                    <h1>Currently Active Activities:</h1>
                )
            }

            {
                token ? (
                    activities && activities.map((activity) => {
                        return (
                            <div key={activity.id} className="post-div">
                                <p><b>Activity Name:</b> <span className='normal-font'><NavLink to="/user-activities" onClick={() => setActivityIdFromParent(activity.id)} >{activity.name}</NavLink></span></p>
                                <p><b>Activity Description:</b> <span className='normal-font'>{activity.description}</span></p>
                                <button onClick={() => {
                                    updateActivityDescription(activity.id, activity.description)
                                    }
                                }>Edit Activity Description</button>
                            </div>
                        )
                    })
                ) : (
                    activities && activities.map((activity) => {
                        return (
                            <div key={activity.id} className="post-div">
                                <p className='bold'>Activity Name: <span className='normal-font'><NavLink to="/user-activities" onClick={() => setActivityIdFromParent(activity.id)} >{activity.name}</NavLink></span></p>
                                <p className='bold'>Activity Description: <span className='normal-font'>{activity.description}</span></p>
                            </div>
                        )
                    })
                )
            }
        </div>
    )
}

export default Activities;