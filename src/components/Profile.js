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
    <div id="posts">
      {info && info.username ? 
      
      <div>
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
                  <DeleteRoutine  routineId={routine.id} setMyRoutines={setMyRoutines}/>
              </div>
            );
          })
        : null}
        </div>
      </div>
      
      : <div className="login-div">
          <p>Sorry, you've reached a restricted page. Please login to see your Routines.</p>
        </div>}
      
        
    </div>
  );
};

export default Profile;







// import React, { useEffect, useState } from 'react';

// const baseURL = 'https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT'


// const Profile = ({username, password, token}) => {
//     const [messages, setMessages] = useState([]);
//     const [posts, setPosts] = useState([]);
//     const [activePosts, setActivePosts] = useState('');
    
//     useEffect(() => {
//         fetch(`${baseURL}/users/me`, {
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             },
//         })
//             .then (response => response.json())
//             .then (
//                 (result) => {
//                     setPosts(result.data.posts);
//                     setMessages(result.data.messages);
//                     posts && posts.map((post) => {
//                         setActivePosts(post.active);
//                     })
//                     // console.log(posts)
//                     // console.log(result.data.posts);
//                     // console.log(result);
//               })             
// }, [])

// return (
       
//     <div>
//         <div id="profile">
//             {
//                 token ? (
//                     <div>
//                         <h1>Welcome, {`${username}`}!</h1>
//                         <br></br>
        
//                         <h2>You have {`${posts.length}`} total Post(s).</h2>
//                         <h2>You have {activePosts} active Post(s).</h2>
//                         <h2>You have inactive Post(s).</h2>
//                         <br></br>

//                         <h2>You have received {`${messages.length}`} Messages.</h2>
//                         <br></br>

//                         <div>
//                             <h3>Messages To Me:</h3>
//                             <p>From User: {`${messages.username}`}</p>
//                             <p>{`${messages.content}`}</p>
//                         </div>

//                     </div>
//                     ) : (
//                          <p>Sorry, you've reached a restricted page. Please login to view your profile</p>
//                         )
//                 }
//             </div>
//         </div>
               
//         )     
//     }

// export default Profile;