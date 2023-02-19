import React, { useState, useEffect } from "react";
import { attachActivity, getActivities, updateRoutineActivity } from "../api";

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
  
    let isMounted = true;
  
    fetchActivities();
  
    return () => {
      isMounted = false;
    };
  }, []);
  

  const handleAttach = async (e) => {
    e.preventDefault();
    try {
      const result = await attachActivity(activityId, duration, routineId);
     
      if (count || duration) {
        await updateRoutineActivity(result.id, count, duration);
      }
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
    <div>
      <form onSubmit={handleAttach}>
        <h3>Add an Activity to your routine:</h3>
        <select value={activityId} onChange={(e) => setActivityId(e.target.value)}>
          <option value="">-- Select an activity --</option>
          {allActivities.length > 0 &&
            allActivities.map((activity) => (
              <option key={activity.id} value={activity.id}>
                {activity.name}
              </option>
            ))}
        </select>
        <br/>
        <label>
          <p>Count: </p>
          <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
        </label>
        <br/>
        <label>
          <p>Duration: </p>
          <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
        </label>
        <br/>
        <button type="submit">Attach Activity</button>
      </form>
    </div>
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
//                 activities: [...(routine.activities ?? []), result],
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
//     <div>
//       <form onSubmit={handleAttach}>
//         <h3>Add an Activity to your routine:</h3>
//         <select value={activityId} onChange={(e) => setActivityId(e.target.value)}>
//           <option value="">-- Select an activity --</option>
//           {allActivities.length > 0 &&
//             allActivities.map((activity) => (
//               <option key={activity.id} value={activity.id}>
//                 {activity.name}
//               </option>
//             ))}
//         </select>
//         <br/>
//         <label>
//           <b>Count: </b>
//           <input type="number" value={count} onChange={(e) => setCount(e.target.value)} />
//         </label>
//         <br/>
//         <label>
//           <b>Duration: </b>
//           <input type="number" value={duration} onChange={(e) => setDuration(e.target.value)} />
//         </label>
//         <br/>
//         <button type="submit">Attach Activity</button>
//       </form>
//     </div>
//   );
// };

// export default AddActivityToRoutine;