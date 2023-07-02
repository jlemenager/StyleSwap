import UserContext from "../UserContext"
import React, { useState, useContext } from 'react'
import axios from 'axios'

export default function Home() {
    const { posts, setPosts } = useContext(UserContext)
    let initialState = {
        username: '',
        description: ''
    }
    const [formState, setFormState] = useState(initialState)


    const handleChange = event => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }
    const handleSubmit = event => {
        event.preventDefault()
        console.log(formState)
        addPost()
        setFormState(initialState)
    }

    const addPost = async () => {
       const res = await axios.post(`http://localhost:3001/api/post`, formState)

       setPosts([...posts, res.data])
    }

    return(
        <div>  
            <div>
                <form onSubmit={handleSubmit}>
                    <lable htmlFor='username'>Username</lable>
                    <input
                          id='username'
                          type='text'
                          onChange={handleChange}
                          value={formState.username}></input>
                    <label>Description</label>
                    <input id='description'
                           type='text'
                           onChange={handleChange}
                           value={formState.description}></input>
                    <button type='submit'></button>
                </form>
            </div>

           <div>
             {posts.map(post=>(
                <div key={post.username} className='post'>
                <h2>{post.username}</h2>
                <p>{post.description}</p>
                <p>{post.products}</p>
                <span>{post.likes}</span>
                <span>{post.comments}</span>
                <label>comment</label>
                <input></input>
               
                </div>
              ))}
            </div>  
            <h1>home</h1>
           
        </div>
    )
}
