import React, { useState, useEffect } from "react";
import { getUser, getUserRoutine } from "../api";
import { AddRoutine, DeleteRoutine} from "./";


const Profile = () => {
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


