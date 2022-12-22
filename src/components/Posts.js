import React, { useEffect, useState } from 'react';

const Posts = () => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
            fetch("https://strangers-things.herokuapp.com/api/2209-FTB-MT-WEB-PT/posts")
                .then(response => response.json())
                .then(
                    (result) => {
                        setIsLoaded(true)

                        // console.log(result);
                    
                        setPosts(result.data.posts)
                        // console.log(result.data.posts)
                    }
                )
    }, [])

    return (
        <div id="posts">
            <h1>All Posts:</h1> <br></br>
        
            {
                posts && posts.map((post) => {
                    return (
                        <div key={post._id} className='post-div'>
                            <h3>{post.title}</h3>
                            <p className='bold'>Description: <span className='normal-font'>{post.description}</span></p>
                            <p className='bold'>Seller: <span className='normal-font'>{post.author.username}</span></p>
                            <p className='bold'>Price: <span className='normal-font'>{post.price}</span></p>
                            <p className='bold'>Location: <span className='normal-font'>{post.location}</span></p>
                        </div>
                    )
                })
            }  
        </div>
    )
}

export default Posts;