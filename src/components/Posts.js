import React, { useEffect, useState } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';

const Posts = ({token}) => {
    const [posts, setPosts] = useState([]);
    const [postID, setPostID] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
            fetch("https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/posts", {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}` 
                },
            })
                .then(response => response.json())
                .then(
                    (result) => {
                        setPosts(result.data.posts);

                        posts && posts.map((post) => {
                            setPostID(post._id);
                        })
                        
                    }
                )
    }, [token])

    const navigateToNewPostForm = async () => {
        navigate('/posts/addpost');           
        };

    const deletePost = async () => {
        try {
            const response = await fetch(`https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/posts/${postID}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            const data = await response.json();
            confirm("Are you sure you want to delete this post?");
            return data;
        } catch(error) {
            console.log('error deleting post')
        }
    }

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
                        <div key={post._id} className={post.isAuthor ? 'post-div myPosts' : 'post-div'}>
                            <h3>{post.title}</h3>
                            <p className='bold'>Description: <span className='normal-font'>{post.description}</span></p>
                            <p className='bold'>Seller: <span className='normal-font'>{post.author.username}</span></p>
                            <p className='bold'>Price: <span className='normal-font'>{post.price}</span></p>
                            <p className='bold'>Location: <span className='normal-font'>{post.location}</span></p>
                            <p>Post ID: {post._id}</p>
                            {post.isAuthor ? <button>Edit</button> : null}
                            {post.isAuthor ? <button onClick={deletePost}>Delete</button> : null}
                            {token && !post.isAuthor ? <button>Send Message</button> : null}
                        </div>
                    )
                })
            }  
        </div>
    )
}

export default Posts;