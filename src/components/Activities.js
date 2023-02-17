import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getActivities } from '../api';

const Activities = ({token, setActivityIdFromParent}) => {
    const [activities, setActivities] = useState([]);

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
    }, []);

    return (
        <div id="posts">
            {
                token ? (
                    <div>
                        <h1>Currently Active Activities:</h1>
                        <button onClick={navigateToNewPostForm}>Create New Activity</button>
                    </div>
                ) : (
                    <h1>Currently Active Activities:</h1>
                )
            }
            
            {
                activities && activities.map((activity) => {
                    return (
                        <div key={activity.id} className="post-div">
                            <p className='bold'>Activity Name: <span className='normal-font'><NavLink to="/user-activities" onClick={() => setActivityIdFromParent(activity.id)} >{activity.name}</NavLink></span></p>
                            <p className='bold'>Activity Description: <span className='normal-font'>{activity.description}</span></p>
                        </div>
                    )
                })
            }  
        </div>
    )
}

export default Activities;