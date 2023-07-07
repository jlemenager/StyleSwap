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
        console.log(postId)
            if (!clicked) {
                const updatedLikes = likes + 1
                const response = await axios.put(`http://localhost:3001/api/post/${postId}/like`, {...posts, likes: updatedLikes });
                setLikes(response.data.post.likes)
                setClicked(true)
                document.querySelector('.likes').innerHTML = likes
            } else {
                const updatedLikes = likes - 1
                const response = await axios.put(`http://localhost:3001/api/post/${postId}/unlike`, {...posts, likes: updatedLikes})
                setLikes(response.data.post.likes)
                setClicked(false)
                document.querySelector('.likes').innerHTML = likes
                console.log(response.data)
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
        const comment = document.querySelectorAll('.comment-list-section')[index]
        // const commentList = document.querySelectorAll('.comment-list-section')[index]
        if(comment.style.display==='none'){
            comment.style.display = 'flex'
        } else {
            comment.style.display = 'none'
        }
    }

    const showCommentsOnSubmit = (index) => {
        const comment = document.querySelectorAll('.comment-list-section')[index]
        const input = document.querySelectorAll('.write-comment')[index]
        // const commentList = document.querySelectorAll('.comment-list-section')[index]
        if(comment.style.display==='none' || input.value !== ''){
            comment.style.display = 'flex'
        }
        console.log(index)
    }

    // useEffect(()=>{
    //     const scrollPosition = sessionStorage.getItem('scrollPosition')
    //     if (scrollPosition){
    //         window.scrollTo(0,parseInt(scrollPosition))
    //         sessionStorage.removeItem('scrollPosition')
    //     }
    // },[])

    const createComment = async(postId, idx) => {
        let postComments = posts[posts.length-(idx+1)].comments
        postComments.push(commentState)
        let response = await axios.put(`http://localhost:3001/api/post/${postId}`, {
            username: posts[posts.length-(idx+1)].username,
            image: posts[posts.length-(idx+1)].image,
            description: posts[posts.length-(idx+1)].description,
            products: posts[posts.length-(idx+1)].products,
            likes: posts[posts.length-(idx+1)].likes,
            comments: postComments
        })
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
                <button className='delete-button' onClick={() => handlePostDelete(posts[posts.length-(idx+1)]._id)}>X</button>
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
                <img className='like-button reaction-image' onClick={() => {
                    handleLike(posts[posts.length-(idx+1)]._id)
                }} src="src/images/like.png" alt='like'/>
                <span className='likes'>{ posts[posts.length-(idx+1)].likes }</span>
                <br/>
                <img className='comment-button reaction-image' onClick={()=>{
                    showComments(idx)}} src="src/images/comment.png" alt='comment'/>
                </div>
                <br/>
                <div className='write-comment-section'>
                <img className='nav-icon' src="src/images/user-icon.png" alt="user-icon" />
                <div className="write-comment">
                <input className='comment-bar' onChange={handleCommentChange} placeholder='Write your comment here...'></input>
                <button className='comment-submit' onClick={()=>{
                    createComment(posts[posts.length-(idx+1)]._id, idx)
                    showCommentsOnSubmit(idx)
                    }}>Submit</button>
                </div>
                </div>
                <div className='comment-list-section'>
                    <div className='comment-list-line'></div>
                    <div className='comment-list'>
                    {posts[posts.length-(idx+1)].comments.map((comment,idx)=>(
                        <div key={idx} className='comment-with-icon'>
                        <img className='nav-icon' src="src/images/user-icon.png" alt="user-icon" />
                        <p className='comment'>{comment}</p> 
                        </div>
                    ))}
                    </div>
                </div>
                </div>
            ))}
        </div>
        </div>
    )
}