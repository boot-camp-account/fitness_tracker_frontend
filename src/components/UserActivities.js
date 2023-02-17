import React, { useState, useEffect } from "react";
import { getActivityPublicRoutines } from "../api";

const UserActivities = ({activityId}) => {
  const [activities, setActivities] = useState([]);
  const [routineName, SetRoutineName] = useState(""); 

  const getActivitiesInfo = async () => {
    try {
      const result = await getActivityPublicRoutines(activityId);
      if (result) {
        setActivities(result);
        SetRoutineName(result[0].activities[0].name)
      }
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getActivitiesInfo();
  }, []);

  return (
    <div id="posts">
      <h1>These Public Routines Feature the Activity: <span className="highlight">"{routineName}"</span></h1>

      <div>
        {activities.length ? (
          activities.map((activity) => {
            const { id, creatorId, isPublic, name, goal, creatorName, activities } = activity;
            if (isPublic) {
              return (
                <div key={id} className="post-div">
                  <div>
                    <h3>This Routine features the Activity: <span className="highlight">"{routineName}"</span></h3>
                    <h3><u>Routine Name:</u> {name}</h3>
                    <p><b>Routine ID:</b> {id}</p>
                    <p><b>Routine Goal:</b> {goal}</p>
                    <p><b>Routine Creator: </b>{creatorName}</p>
                  </div>
                  <br></br>
                  <h3><u>Activities in this Routine:</u></h3>
                  <div>
                    {activities.map(({ id, name, description, count, duration }) => {
                      return (
                        <div key={id}>
                          <p><b>Activity:</b> <span className="highlight">{name}</span></p>
                          <p><b>Description:</b> {description}</p>
                          <p><b>Count:</b> {count}</p>
                          <p><b>Duration:</b> {duration}</p>
                          <br></br>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            } else {
              return null;
            }
          })
        ) : null}
      </div>
    </div>
  );
};

export default UserActivities;