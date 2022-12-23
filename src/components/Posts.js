import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

const Posts = ({token}) => {
    const [posts, setPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
            fetch("https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/posts")
                .then(response => response.json())
                .then(
                    (result) => {
                        setPosts(result.data.posts)
                    }
                )
    }, [token])

    const navigateToNewPostForm = async () => {
        navigate('/posts/addpost');
            // try {
            //     const response = await fetch('https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/posts', {
            //         method: "POST",
            //         headers: {
            //             'Content-Type': 'application/json',
            //             'Authorization': `Bearer ${token}`
            //         },
            //         body: JSON.stringify({
            //             post: {
            //             title: "Test Title",
            //             description: "Test Description",
            //             price: "Test Price",
            //             willDeliver: true
            //             },
            //         }),
            //     });
            //     const result = await response.json();
            //     console.log(response);
            //     console.log(result);
            // } catch (error) {
            //     console.error(error);
            // }
           
        };

    return (
        <div id="posts">
            
            {
                token ? (
                    <div>
                        <h1>All Posts:</h1>
                            <button onClick={navigateToNewPostForm}>Create New Post</button>
                    </div>
                ) : (
                    <h1>All Posts:</h1>
                )
            }
            
           
            {
                posts && posts.map((post) => {
                    return (
                        <div key={post._id} className='post-div'>
                            <h3>{post.title}</h3>
                            <p className='bold'>Description: <span className='normal-font'>{post.description}</span></p>
                            <p className='bold'>Seller: <span className='normal-font'>{post.author.username}</span></p>
                            <p className='bold'>Price: <span className='normal-font'>{post.price}</span></p>
                            <p className='bold'>Location: <span className='normal-font'>{post.location}</span></p>
                            {post.isAuthor ? <button>Edit</button> :null}
                            {post.isAuthor ? <button>Delete</button> : null}
                        </div>
                    )
                })
            }  
        </div>
    )
}

export default Posts;