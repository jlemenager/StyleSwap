import UserContext from "../UserContext"
import React, { useState, useContext } from 'react'
import axios from 'axios'

export default function Home() {
    const { posts, setPosts } = useContext(UserContext)
    let initialState = {
        username: '',
        description: '',
        likes: ''
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
        const response = await axios.put(`http://localhost:3001/api/post/${postId}/like`, {...posts, likes: likes + 1});
        console.log(response.data);

          location.reload()
      };
      


  
 

 main

    const [likes, setLikes] = useState(0)
    
    const handleLike = () => {
        const addLike = async(clickLike, post) =>{
            const response = await axios.put(`http://localhost:3001/api/post/${clickLike}`, {...post, likes: likes + 1})
            location.reload()
        }
        addLike()
    }

    return(
        <div>
            <div className='post-form'>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username: </label>
                <input type="text" value={formState.username} onChange={handleChange} id='username'/>
                <label htmlFor="description">Description: </label>
                <textarea type="text" value={formState.description} onChange={handleChange} id='description'/>
                <input type="submit" />
            </form> 
            </div>
            <h1>home</h1>
            {posts.map((post, idx) =>(
                <div key={posts[posts.length-(idx+1)]._id} className='post'>
                <h2>{posts[posts.length-(idx+1)].username}</h2>
                <p>{posts[posts.length-(idx+1)].description}</p>
                <p>{posts[posts.length-(idx+1)].products}</p>
                <span>Likes: {posts[posts.length-(idx+1)].likes}</span>
                <br/>
                <span>Comment: {posts[posts.length-(idx+1)].comments}</span>
                <br/>
                <button onClick={() => handleLike(posts[posts.length-(idx+1)]._id, posts[posts.length-(idx+1)])}>Like</button>
                <label>comment:</label>
                <input></input>
                <button>submit comment</button>
                </div>
            ))}
        </div>
    )
}