import React from "react";
import { deleteRoutine } from "../api";

const DeleteRoutine = ({ routineId, setMyRoutines }) => {
  const handleDelete = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem("token");
    try {
      await deleteRoutine(token, routineId);
      setMyRoutines((prevRoutines) =>
        prevRoutines.filter((routine) => routine.id !== routineId)
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <button onClick={handleDelete} type="button">
      Delete Routine
    </button>
  );
};

export default DeleteRoutine;



