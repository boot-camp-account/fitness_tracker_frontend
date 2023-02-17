import React, { useState, useEffect } from "react";
import { getUserRoutine } from "../api";

const UserRoutines = ({individualUsername}) => {
  const [routines, setRoutines] = useState([]);

  const getRoutinesInfo = async () => {
    try {
      const result = await getUserPublicRoutine(individualUsername);
      if (result) {
        console.log(result)
        setRoutines(result);
      }
    } catch (error) {
      console.log("hi")
      console.error(error);
    }
  };

  useEffect(() => {
    getRoutinesInfo();
  }, []);

  return (
    <div id="posts">
      <h1>All Active Routines for {individualUsername}:</h1>

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


// const UserRoutines = ({individualUsername}) => {
//     const [userRoutines, setUserRoutines] = useState([]);

//     const getUserRoutines = async () => {
//         try {
//             const result = await getUserRoutine(individualUsername);
//             if (result) {
//               setUserRoutines(result);
//             }
//         } catch (error) {
//           console.error(error);
//         }
//       };

// useEffect(() => {
//     getUserRoutines();
// }, []);

// return (
//     <div id="posts">
//       <h1>All Active Routines for {individualUsername}:</h1>

//       <div>
//         {userRoutines.length ? (
//           userRoutines.map((routine) => {
//             const { id, name, isPublic, goal, creatorName, activities } = routine;
//             if (isPublic) {
//               return (
//                 <div key={id} className="post-div">
//                   <div>
//                     <h3>Routine Name: {name}</h3>
//                     <p><b>Goal:</b> {goal}</p>
//                     <p><b>Creator:</b> {creatorName}</p>
//                   </div>
//                   <br></br>
//                   <h3><u>Activities in this Routine:</u></h3>
//                   <div>
//                     {activities.map(({ id, name, description, count, duration }) => {
//                       return (
//                         <div key={id}>
//                           <p><b>Activity:</b> {name}</p>
//                           <p><b>Description:</b> {description}</p>
//                           <p><b>Count:</b> {count}</p>
//                           <p><b>Duration:</b> {duration}</p>
//                           <br></br>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               );
//             } else {
//               return null;
//             }
//           })
//         ) : <h2>Hi</h2>}
//       </div>
//     </div>
//   );
// }

// export default UserRoutines;