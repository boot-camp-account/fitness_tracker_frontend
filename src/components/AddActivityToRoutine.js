import React, { useState, useEffect } from "react";
import { attachActivity, getActivities } from "../api";

const AddActivityToRoutine = ({ routineId, setMyRoutines }) => {
  const [activityId, setActivityId] = useState("");
  const [count, setCount] = useState("");
  const [duration, setDuration] = useState("");
  const [allActivities, setAllActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const activities = await getActivities();
        setAllActivities(activities);
      } catch (error) {
        console.error(error);
      }
    };
    fetchActivities();
  }, []);

  const handleAttach = async (e) => {
    e.preventDefault();
    try {
      const result = await attachActivity(activityId, count, duration, routineId);
      setMyRoutines((prevRoutines) =>
        prevRoutines.map((routine) =>
          routine.id === routineId
            ? {
                ...routine,
                activities: [...(routine.activities ?? []), result],
              }
            : routine
        )
      );
      setActivityId("");
      setCount("");
      setDuration("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleAttach}>
      <select value={activityId} onChange={(e) => setActivityId(e.target.value)}>
        <option value="">-- Select an activity --</option>
        {allActivities.length > 0 &&
          allActivities.map((activity) => (
            <option key={activity.id} value={activity.id}>
              {activity.name}
            </option>
          ))}
      </select>
      <br />
      <label>
        Count:
        <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
      </label>
      <br />
      <label>
        Duration:
        <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
      </label>
      <br />
      <button type="submit">Attach Activity</button>
    </form>
  );
};

export default AddActivityToRoutine;



// import React, { useState, useEffect } from "react";
// import { attachActivity, getActivities } from "../api";

// const AddActivityToRoutine = ({ routineId, setMyRoutines }) => {
//   const [activityId, setActivityId] = useState("");
//   const [count, setCount] = useState("");
//   const [duration, setDuration] = useState("");
//   const [allActivities, setAllActivities] = useState([]);

//   useEffect(() => {
//     const fetchActivities = async () => {
//       try {
//         const activities = await getActivities();
//         setAllActivities(activities);
//       } catch (error) {
//         console.error(error);
//       }
//     };
//     fetchActivities();
//   }, []);

//   const handleAttach = async (e) => {
//     e.preventDefault();
//     try {
//       const result = await attachActivity(activityId, count, duration, routineId);
//       setMyRoutines((prevRoutines) =>
//         prevRoutines.map((routine) =>
//           routine.id === routineId
//             ? {
//                 ...routine,
//                 activities: [...routine.activities, result],
//               }
//             : routine
//         )
//       );
//       setActivityId("");
//       setCount("");
//       setDuration("");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleAttach}>
//       <select value={activityId} onChange={(e) => setActivityId(e.target.value)}>
//         <option value="">-- Select an activity --</option>
//         {allActivities.map((activity) => (
//           <option key={activity.id} value={activity.id}>
//             {activity.name}
//           </option>
//         ))}
//       </select>
//       <br />
//       <label>
//         Count:
//         <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Duration:
//         <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
//       </label>
//       <br />
//       <button type="submit">Attach Activity</button>
//     </form>
//   );
// };

// export default AddActivityToRoutine;


