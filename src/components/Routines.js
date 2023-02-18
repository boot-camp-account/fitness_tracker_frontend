import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getRoutines } from "../api";

const Routines = ({ setActivityIdFromParent, setIndividualUsernameFromParent}) => {
  const [routines, setRoutines] = useState([]);

  const getRoutinesInfo = async () => {
    try {
      const result = await getRoutines();
      if (result) {
        setRoutines(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRoutinesInfo();
  }, []);

  return (
    <div id="posts">
      <h1>All Active Routines:</h1>

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
                    <p><b>Creator:</b> <NavLink to="/user-routines" onClick={() => setIndividualUsernameFromParent(routine.creatorName)}>{creatorName}</NavLink></p>
                  </div>
                  <br></br>
                  <h3><u>Activities in this Routine:</u></h3>
                  <div>
                    {activities.map(({ id, name, description, count, duration }) => {
                      return (
                        <div key={id}>
                          <p><b>Activity:</b> <NavLink to="/user-activities" onClick={() => setActivityIdFromParent(routine.id)}>{name}</NavLink></p>
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

export default Routines;
