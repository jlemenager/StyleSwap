import UserContext from "../UserContext"
import React, { useState, useContext } from 'react'
import axios from 'axios'
import VerticalNav from './VerticalNav'
export default function Home() {


    //post function section
    const { posts, setPosts } = useContext(UserContext)
    let initialState = {
        username: '',
        description: '',
        likes: 0
    }
    const [formState, setFormState] = useState(initialState)
    const handleChange = event => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }
    const handleSubmit = event => {
        event.preventDefault()
        const postNewPost = async() => {
            const response = await axios.post(`http://localhost:3001/api/post`, { ...formState, username:formState.username, description:formState.description, likes: 0 })
           const newPost = response.data
           setPosts([newPost, ...posts])
            setPosts(response.data.posts)
            setFormState(initialState)
        }
        location.reload()
        postNewPost()
        // location.reload()
        console.log(posts)
    }
    const [likes, setLikes] = useState()
    const handleLike = async (postId) => {
        let response = await axios.put(`http://localhost:3001/api/post/${postId}/like`, {...posts, likes: likes + 1 });
        console.log(response.data);
        console.log(postId)
        // setLikes(response.data.posts.likes)
        location.reload()
      };
    return(
        <div className='main-page'>
        <VerticalNav />
        <div className='feed'>
            <div className='post-form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" value={formState.username} onChange={handleChange} id='username'/>
                <label htmlFor="description">Description: </label>
                <textarea type="text" value={formState.description} onChange={handleChange} id='description'/>
                <input className='submit' type="submit" />
            </form>
            </div>
            <h1>home</h1>
            {posts.map((post, idx) =>(
                <div key={idx} className='post'>
                <h2>{posts[posts.length-(idx+1)].username}</h2>
                <img src={posts[posts.length-(idx+1)].image}/>
                <p>{posts[posts.length-(idx+1)].description}</p>
                <p>{posts[posts.length-(idx+1)].products}</p>
                <span>Likes: {posts[posts.length-(idx+1)].likes}</span>
                <br/>
                <span>Comment: {posts[posts.length-(idx+1)].comments}</span>
                <br/>
                <button onClick={() => handleLike(posts[posts.length-(idx+1)]._id,)}>Like</button>
                <label>comment:</label>
                <input></input>
                <button>submit comment</button>
                <button onClick={() => handlePostDelete(posts[posts.length-(idx+1)]._id)}>Delete post</button>
                </div>
            ))}
        </div>
        </div>
    )
}