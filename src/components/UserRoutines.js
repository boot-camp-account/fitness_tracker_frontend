import React, { useState, useEffect } from "react";
import { getUserPublicRoutine } from "../api";

const UserRoutines = ({individualUsername}) => {
  const [routines, setRoutines] = useState([]);

  const getRoutinesInfo = async () => {
    try {
      const result = await getUserPublicRoutine(individualUsername);
      if (result) {
        setRoutines(result);
      }
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => {
    getRoutinesInfo();
  }, []);

  return (
    <div id="posts">
      <h1>All Active Routines for: <span className="highlight">{individualUsername}</span></h1>

      <div>
        {routines.length ? (
          routines.map((routine) => {
            const { id, name, isPublic, goal, creatorName, activities } = routine;
            if (isPublic) {
              return (
                <div key={id} className="post-div">
                  <div>
                    <h3>Routine Name: {name}</h3>
                    <p><b>Goal:</b> {goal}</p>
                    <p><b>Creator: </b>{creatorName}</p>
                  </div>
                  <br></br>
                  <h3><u>Activities in this Routine:</u></h3>
                  <div>
                    {activities.map(({ id, name, description, count, duration }) => {
                      return (
                        <div key={id}>
                          <p><b>Activity:</b> {name}</p>
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

export default UserRoutines;