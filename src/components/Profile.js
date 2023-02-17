import React, { useState, useEffect } from "react";
import { getUser, getUserRoutine } from "../api";
import { AddRoutine, DeleteRoutine} from "./";
import { UpdateRoutine } from "./";

const Profile = ({user}) => {
  const userID = user.id;
  const [info, setInfo] = useState({});
  const [myRoutines, setMyRoutines] = useState([]);

  const getUserInfo = async () => {
    try {
      const result = await getUser();
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
        const result = await getUserRoutine(info.username);
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
      <h2>Hello, {info.username}.</h2> 
      <br></br>

      <div>
        <AddRoutine myRoutines={myRoutines} setMyRoutines={setMyRoutines} />
        <h3>MY ACTIVE ROUTINES:</h3>
      {myRoutines && myRoutines.length
        ? myRoutines.map((routine, index) => {
            return (
                <div className="post-div" key={`profile:${routine.id} ${index}`}>
                  <p><b>Routine:</b> {routine.name}</p>
                  <p><b>Goal:</b> {routine.goal}</p>
                  <DeleteRoutine routineId={routine.id} setMyRoutines={setMyRoutines} />               
                  <React.Fragment>
                  <UpdateRoutine
                  routineId={routine.id}
                  routineName={routine.name}
                  routineGoal={routine.goal}
                  setMyRoutines={setMyRoutines}
                  />
                  <DeleteRoutine routineId={routine.id} setMyRoutines={setMyRoutines} />
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


