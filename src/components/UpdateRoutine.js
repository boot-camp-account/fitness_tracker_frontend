import React, { useState } from "react";
import {updateRoutines} from "../api";


const UpdateRoutine = ({ routineId, routineName, routineGoal, setMyRoutines }) => {
  const [name, setName] = useState(routineName);
  const [goal, setGoal] = useState(routineGoal);
  // const [User, setUser] = useState(null);

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedRoutine = await updateRoutines(routineId, name, goal);
      setMyRoutines((prevRoutines) =>
        prevRoutines.map((routine) =>
          routine.id === routineId
            ? {
                ...routine,
                name: updatedRoutine.name,
                goal: updatedRoutine.goal,
                activities: updatedRoutine.activities,
              }
            : routine
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <label>
        Routine Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <br />
      <label>
        Goal:
        <input type="text" value={goal} onChange={(e) => setGoal(e.target.value)} />
      </label>
      <br />
      <button type="submit">Update</button>
    </form>
  );
};

export default UpdateRoutine;






