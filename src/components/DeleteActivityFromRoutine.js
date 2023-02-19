import React, { useState } from "react";
import { deleteRoutineActivity } from "../api";

const RemoveActivityFromRoutine = ({ routineActivityId, setActivities }) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      const result = await deleteRoutineActivity(routineActivityId);
      if (result.success) {

        setActivities((prevActivities) =>
          prevActivities.filter(
            (activity) => activity.id !== result.activityId
          )
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      disabled={loading}
    >
      {loading ? "Deleting..." : "Delete Activity"}
    </button>
  );
};

export default RemoveActivityFromRoutine;
