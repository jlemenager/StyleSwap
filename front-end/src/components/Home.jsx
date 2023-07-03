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
            const response = await axios.post(`http://localhost:3001/api/post`, { ...formState, username:formState.username, description:formState.description,  })
           
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

     const handleLike = async postId => {
        const response = await axios.post(`http://localhost:3001/api/posts/${postId}/like`)

        console.log(response)
     
        
        const updatedPosts = posts.map(post => {
            if(post._id === postId) {
                return { ...post, likes: post.likes + 1}
            }
            return post
        })
        setPosts(updatedPosts)
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
            {posts.reverse().map(post =>(
                <div key={post._id} className='post'>
                <h2>{post.username}</h2>
                <p>{post.description}</p>
                <p>{post.products}</p>
                <span>Likes: {post.likes}</span>
                <br/>
                <span>Comment: {post.comments}</span>
                <br/>
                <button onClick={() => handleLike(post._id)}>Like</button>
                <label>comment:</label>
                <input></input>
                <button>submit comment</button>
                </div>
            ))}
        </div>
    )
}