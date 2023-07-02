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
        const postNewPost = async() => {
            const response = await axios.post(`http://localhost:3001/api/post`, {...formState, username:formState.username, description:formState.description})
        }
        postNewPost()  

    }

    return(
        <div>    
            <h1>home</h1>
            {posts.map(post=>(
                <div key={post.description} className='post'>
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
