import React, { useState, useEffect } from "react";
import { getUser, getUserRoutine, attachActivity, getUserPublicRoutine } from "../api";
import { AddRoutine, DeleteRoutine, UpdateRoutine, AddActivityToRoutine, DeleteActivityFromRoutine } from "./";

const Profile = ({user, username, token}) => {
  const userID = user.id;
  const [info, setInfo] = useState({});
  const [myRoutines, setMyRoutines] = useState([]);

  const getUserInfo = async () => {
    try {
      const result = await getUser(token);
      if (result) {
        setInfo(result);
      }
    } catch (error) {
      console.error(error);
    }
  };  

  const getMyRoutines = async () => {
    try {
      if (info && info.username) {
        const result = await getUserRoutine(username, token);
        if (result) {
          setMyRoutines(result);
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    getMyRoutines();
  }, [info]);

  return (
    <div>
      {info && info.username ? 
      
      <div id="posts">
      <h2>Hello, {info.username}!</h2> 
      <br></br>

      <div>
        <AddRoutine myRoutines={myRoutines} setMyRoutines={setMyRoutines} />
        <h3>MY ROUTINES:</h3>
        {myRoutines && myRoutines.length
        ? myRoutines.map((routine, index) => {
            return (
              <div className="post-div" key={`profile:${routine.id} ${index}`}>
                <p><b>Routine Name:</b> {routine.name}</p>
                <p><b>Routine Goal:</b> {routine.goal}</p>
                <DeleteRoutine routineId={routine.id} setMyRoutines={setMyRoutines} />  
                <br/>
                <br/>             
                <React.Fragment>
                  <UpdateRoutine
                    routineId={routine.id}
                    routineName={routine.name}
                    routineGoal={routine.goal}
                    setMyRoutines={setMyRoutines}
                    routineIsPublic={routine.isPublic}
                  />
                
                  <AddActivityToRoutine
                    routineId={routine.id}
                    myRoutines={myRoutines}
                    setMyRoutines={setMyRoutines}
                    token={ token }
                  />
                  
                  {routine.activities && routine.activities.length > 0 && (
                    <div>
                      <h4>Activities:</h4>
                      <ul className="special-ul">
                      {routine.activities.map((activity) => (
                     <li key={`activity:${routine.id}:${activity.id}`}>
                      
                      {activity && (
                     <>
                    <p>Activity:</p> {activity.name}, <p>Count:</p> {activity.count}, <p>Duration:</p> {activity.duration}
                    <DeleteActivityFromRoutine routineId={routine.id} activityId={activity.id} setMyRoutines={setMyRoutines} />
                    </>
                     )}
                      </li>
                      ))}
                      </ul>
                    </div>
                  )}
                </React.Fragment>
              </div>
            );
          })
        : null}
      </div>
    </div>
      
      : <div id="login">
          <div className="login-div">
            <p>Sorry, you've reached a restricted page. Please login to see your Routines.</p>
          </div>
        </div>}
    </div>
  );
};

export default Profile;



 