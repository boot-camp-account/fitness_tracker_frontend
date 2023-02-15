import React, { useEffect, useState } from "react";

import { getRoutines } from "../api";



const Routines = () => {
  const [routines, setRoutines] = useState([]);

  const getRoutinesInfo = async () => {
    try {
      const result = await getRoutines();
      if (result) {
        setRoutines(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getRoutinesInfo();
  }, []);

  return(
    <div >
      <h2 >Routines</h2>

      <div>
        {routines.length ? (
          routines.map((routine) => {
            const { id, name, isPublic, goal, creatorName, activities} = routine;
            if(isPublic){
              return(
                <div>
                  <div>
                    <h1>Routine</h1>
                  <h3>Name: {name}</h3>
                  <p>Goal: {goal}</p>
                  <p>Creator: {creatorName}</p>
                  </div>

                  <div>
                  {activities.map(({id, name, description, count, duration}) => {
                    return(
                      <div >
                        <h3> Activity: {name}</h3>
                        <p>Description: {description}</p>
                        <p>Count: {count}</p>
                        <p>Duration: {duration}</p>
                      </div>
                    )
                  }
                  )}
                   </div>
                </div>
              )
            }
          })
        ):null}
      </div>
    </div>
  )
};

export default Routines;




// import React, { useEffect, useState } from 'react';
// import { useNavigate, NavLink } from 'react-router-dom';

// const Routines = ({token}) => {
//     const [routines, setRoutines] = useState([]);
//     const [postID, setPostID] = useState('');
//     const navigate = useNavigate();

//     useEffect(() => {
//         fetch('https://fitnesstrac-kr.herokuapp.com/api/routines')
//         .then((response) => response.json())
//         .then((result) => {
//             console.log(result);
//             console.log(result[0])
//             setRoutines(result)
//         });
//     }, []);    

//     // useEffect(() => {
//     //         fetch("https://fitnesstrac-kr.herokuapp.com/api/activities", {
//     //             method: "GET",
//     //             headers: {
//     //                 'Content-Type': 'application/json',
//     //                 // 'Authorization': `Bearer ${token}` 
//     //             },
//     //         })
//     //             .then(response => response.json())
//     //             .then((result) => {
//     //                     setPosts(result.data.posts);

//     //                     posts && posts.map((post) => {
//     //                         setPostID(post._id);
//     //                     })
                        
//     //                 }
//     //             )
//     // }, [token])

//     const navigateToNewPostForm = async () => {
//         navigate('/posts/addpost');           
//         };

//     const deletePost = async () => {
//         try {
//             const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/posts/${postID}`, {
//             method: "DELETE",
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${token}`
//             }
//         })
//             const data = await response.json();
//             confirm("Are you sure you want to delete this post?");
//             return data;
//         } catch(error) {
//             console.log('error deleting post')
//         }
//     }

//     return (
//         <div id="posts">
            
//             {
//                 token ? (
//                     <div>
//                         <h1>All Routines:</h1>
//                         <button onClick={navigateToNewPostForm}>Create New Post</button>
//                     </div>
//                 ) : (
//                     <h1>All Routines:</h1>
//                 )
//             }
            
           
//             {
//                 routines && routines.map((routine) => {

//                     return (
//                         <div key={routine.id} className="post-div">
//                         <p className='bold'>Routine Name: <span className='normal-font'>{routine.name}</span></p>
//                         <p className='bold'>Routine Creator: <span className='normal-font'>{routine.creatorName}</span></p>
//                         <p className='bold'>Routine Goal: <span className='normal-font'>{routine.goal}</span></p>


//                         {/*  <div key={post._id} className={post.isAuthor ? 'post-div myPosts' : 'post-div'}>
//                              <h3>{post.title}</h3>
//                              <p className='bold'>Description: <span className='normal-font'>{post.description}</span></p>
//                              <p className='bold'>Seller: <span className='normal-font'>{post.author.username}</span></p>
//                              <p className='bold'>Price: <span className='normal-font'>{post.price}</span></p>
//                              <p className='bold'>Location: <span className='normal-font'>{post.location}</span></p>
//                              <p>Post ID: {post._id}</p>
//                              {post.isAuthor ? <button>Edit</button> : null}
//                              {post.isAuthor ? <button onClick={deletePost}>Delete</button> : null}
//                              {token && !post.isAuthor ? <button>Send Message</button> : null} */}
//                         </div>
//                     )
//                 })
//             }  
//         </div>
//     )
// }

// export default Routines;