import UserContext from "../UserContext"
import React, { useState, useContext, useRef, useEffect } from 'react'
import axios from 'axios'
import VerticalNav from './VerticalNav'
export default function Home() {

    //post function section
    const { posts, setPosts } = useContext(UserContext)
    let initialState = {
        username: '',
        description: '',
        likes: 0,
        image: ''
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

//    likes function section

    const [likes, setLikes] = useState(0)

    const [clicked, setClicked] = useState(false)
    
    const handleLike = async (postId) => {
        const updatedLikes = likes + 1
        
            if (!clicked) {
                let response = await axios.put(`http://localhost:3001/api/post/${postId}/like`, {...posts, likes: updatedLikes });
                setLikes(response.data.post.likes)
                console.log(updatedLikes)
                setClicked(true)
                   if (likes!==0){
                        document.querySelector('.likes').innerHTML = likes
                   }
            } else {
                const updatedLikes = likes - 1
                let response = await axios.put(`http://localhost:3001/api/post/${postId}/unlike`, {...posts, likes: updatedLikes})
                setLikes(response.data.post.likes)
                setClicked(false)
                    if (likes!==0){
                        document.querySelector('.likes').innerHTML = likes
                    }
                console.log(postId)
                console.log(updatedLikes)
            }
        }

    //show comments

    // useEffect(()=>{
    //     const getCommentsFromAPI = () => {
    //         posts.map(post=>{
    //             setComments(post.comments)
    //         })
    //     }
    //     getCommentsFromAPI()
    // },[comments])

    const [commentState, setCommentState] = useState('')
    const [comments1, setComments] = useState([])

    const handleCommentChange = (evt) => {
        setCommentState(evt.target.value)
        console.log(commentState)
    }

    const showComments = (index) => {
        const comment = document.querySelectorAll('.comment-list')[index]
        if(comment.style.display==='none'){
                comment.style.display = 'block'
        } else {
            comment.style.display = 'none'
        }
    }

    const createComment = async(postId, idx) => {
        let postComments = posts[posts.length-(idx+1)].comments
        postComments.push(commentState)
        console.log(postComments)
        setComments(['a'])
        // console.log(...postComments)
        console.log(comments1)
        let response = await axios.put(`http://localhost:3001/api/post/${postId}`, {
            username: posts[posts.length-(idx+1)].username,
            image: posts[posts.length-(idx+1)].image,
            description: posts[posts.length-(idx+1)].description,
            products: posts[posts.length-(idx+1)].products,
            likes: posts[posts.length-(idx+1)].likes,
            comments: postComments
        })
        console.log(response)
    }

    //   post delete function section

     const handlePostDelete = async (postId) => {

        const response = await axios.delete(`http://localhost:3001/api/post/${postId}`)
        setPosts(posts.filter((post) => post._id != postId))
    }

    //  uploading Images function section

    const inputRef = useRef(null)
    const [image, setImage] = useState('')

    const handleImageClick = (event) => {
        inputRef.current.click()
    }

    function handleImage(e) {
        const file = e.target.files[0]
        console.log(file)
        setImage('')
    }

    return(
        <div className='main-page'>
        
        <VerticalNav />
        <div className='feed'>
            <div className='post-form'>
            <form onSubmit={handleSubmit}>
                <input placeholder='Username' type="text" value={formState.username} onChange={handleChange} id='username'/>
                <textarea type="text" value={formState.description} onChange={handleChange} id='description' placeholder="What's on your mind?"/>
                <div className='form-bottom-buttons'>
                <div onClick={handleImageClick}
                     className="upload">
                     <img src='./src/images/upload.png'
                        style={{ cursor: 'pointer' }} />
                     <input type='file' 
                        ref={inputRef}
                        onChange={handleImage}
                        style={{ display: 'none' }}></input>
                </div>
                <input className='submit-button-form' type="submit" />
                </div>
            </form> 
            </div>
            {posts.map((post, idx) =>(
                <div key={idx} className='post'>
                <div className='top-post'>
                <div className='post-username-section'>
                <img className='post-user-icon' src="src/images/user-icon.png" alt="user icon" />
                <h3 className='post-username'>{posts[posts.length-(idx+1)].username}</h3>
                </div>
                <p>{posts[posts.length-(idx+1)].description}</p>
                </div>
                <img className='product-image' src={ posts[posts.length-(idx+1)].image}/>
                {/* <p>{posts[posts.length-(idx+1)].products}</p> */}
                <div className='reaction-bar'>
                <button className='like-button' onClick={() => {
                    handleLike(posts[posts.length-(idx+1)]._id)
                }}>Like</button>
                <span className='likes'>{ posts[posts.length-(idx+1)].likes }</span>
                <br/>
                <button className='comment-button' onClick={()=>{
                    showComments(idx)
                }}>Comment</button>
                <div className='comment-list'>
                    {posts[posts.length-(idx+1)].comments.map(comment=>(
                        <p className='comment' key={comment}>{comment}</p> 
                    ))}
                </div>
                </div>
                <br/>

                <input className='comment-bar' onChange={handleCommentChange}></input>

                <button className='comment-submit' onClick={()=>{
                    createComment(posts[posts.length-(idx+1)]._id, idx)
                    // showComments(idx)
                    }}>Submit</button>
                <button className='delete-button' onClick={() => handlePostDelete(posts[posts.length-(idx+1)]._id)}>X</button>
                </div>
            ))}
        </div>
        </div>
    )
}