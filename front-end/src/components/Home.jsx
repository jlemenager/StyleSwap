import UserContext from "../UserContext"
import React, { useContext } from 'react'

export default function Home() {
    const { posts, setPosts } = useContext(UserContext)
    return(
        <div>    
            <h1>home</h1>
            {posts.map(post=>(
                <div className='post'>
                <h2>{post.username}</h2>
                <p>{post.description}</p>
                <p>{post.products}</p>
                <span>{post.likes}</span>
                <span>{post.comments}</span>
                </div>
            ))}
        </div>
    )
}
