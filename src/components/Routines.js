import React, { useEffect, useState } from "react";

import { getRoutines } from "../api";

const Routines = () => {
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
                    <h2>Routine</h2>
                    <h3>Routine Name: {name}</h3>
                    <p>Goal: {goal}</p>
                    <p>Creator: {creatorName}</p>
                  </div>

                  <div>
                    {activities.map(({ id, name, description, count, duration }) => {
                      return (
                        <div key={id}>
                          <h3>Activity: {name}</h3>
                          <p>Description: {description}</p>
                          <p>Count: {count}</p>
                          <p>Duration: {duration}</p>
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
