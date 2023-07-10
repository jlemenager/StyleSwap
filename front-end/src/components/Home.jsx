import UserContext from "../UserContext"
import React, { useState, useContext, useRef, useEffect } from 'react'
import axios from 'axios'
import VerticalNav from './VerticalNav'
import Footer from "./Footer"
// import UploadWidget from "./UploadWidget"
export default function Home() {

    //post function section
    const { posts, setPosts, getPostsAPI, vertUsername, setVertUsername, vertId,setVertId } = useContext(UserContext)
    let initialState = {
        username: vertId,
        description: '',
        likes: 0,
        image: ''
    }
    const [formState, setFormState] = useState(initialState)
    const handleChange = event => {
        setFormState({...formState, [event.target.id]: event.target.value})
    }
    const [file, setFile] = useState('')

    const uploadImage = () => {
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "image-upload")
        data.append("cloud_name","dikdtblpr")
        fetch("https://api.cloudinary.com/v1_1/dikdtblpr/image/upload",{
        method:"post",
        body: data
        })
        .then(resp => resp.json())
        .then(data => {
            console.log(data.url)
        setUrl(data.url)
        })
        .catch(err => console.log(err))
}   

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formState)
        const postNewPost = async() => {
            console.log(formState)
            const response = await axios.post(`http://localhost:3001/api/post/`, {...formState, username: formState.username, description:formState.description, image:'http://localhost:3001/images/' + file, likes:0} )
            const newPost = response.data
            console.log(newPost)
            // setPosts(response.data.posts)
            setPosts([...posts, newPost])
            setFormState(initialState)
        }
        //location.reload()
        postNewPost()
        // uploadImage()
        location.reload()
        // console.log(posts)
        // console.log(newPost)
    }

//    likes function section

    // let [likes, setLikes] = useState(0)

    let [clicked, setClicked] = useState(false)
    
    const handleLike = async (postId, idx) => {
        console.log(postId)
            if (clicked===false) {
                // const updatedLikes = likes + 1
                const response = await axios.put(`http://localhost:3001/api/post/${postId}`, {
                    username: posts[posts.length-(idx+1)].username,
                    image: posts[posts.length-(idx+1)].image,
                    description: posts[posts.length-(idx+1)].description,
                    products: posts[posts.length-(idx+1)].products,
                    likes: posts[posts.length-(idx+1)].likes+=1,
                    comments: posts[posts.length-(idx+1)].comments
                });
                console.log(response)
                // setLikes(response.data.post.likes)
                // console.log(likes)
                setClicked(true)
                // getPostsAPI()
                // document.querySelectorAll('.likes')[idx].innerHTML = response.data.post.likes
            } else if (clicked===true){
                // const updatedLikes = likes - 1
                const response = await axios.put(`http://localhost:3001/api/post/${postId}`, {
                    username: posts[posts.length-(idx+1)].username,
                    image: posts[posts.length-(idx+1)].image,
                    description: posts[posts.length-(idx+1)].description,
                    products: posts[posts.length-(idx+1)].products,
                    likes: posts[posts.length-(idx+1)].likes-=1,
                    comments: posts[posts.length-(idx+1)].comments
                })
                // setLikes(response.data.post.likes)
                setClicked(false)
                console.log(response)
                // document.querySelectorAll('.likes')[idx].innerHTML = response.data.post.likes
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
        if(comment.style.display==='flex'){
            comment.style.display = 'none'
        } else {
            comment.style.display = 'flex'
        }
    }

    const showCommentsOnSubmit = (index) => {
        const comment = document.querySelectorAll('.comment-list-section')[index]
        let input = document.querySelectorAll('.comment-bar')[index]
        // const commentList = document.querySelectorAll('.comment-list-section')[index]
        if(comment.style.display==='none' || input.value !== ''){
            comment.style.display = 'flex'
            input.value=''
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
        getPostsAPI()
    }



    //   post delete function section

     const handlePostDelete = async (postId) => {

        const response = await axios.delete(`http://localhost:3001/api/post/${postId}`)
        setPosts(posts.filter((post) => post._id != postId))
    }

    //  uploading Images function section

    const inputRef = useRef(null)
    const [image, setImage] = useState('')
    const [url, setUrl] = useState('')
    

    const handleImageClick = (event) => {
        inputRef.current.click()
    }

    function handleImage(e) {
        const file = e.target.files[0]
        // function(error, result) {console.log(result);};
        console.log(file)
        setImage(file)
        setImage('')
    }

    const handleImageUpload = async(event) => {
        const files = event.target.files
        console.log(files[0])
        setFile(files[0].name)
        const myImage = files[0]
        const imageType = /image.*/
      
        // if (!myImage.type.match(imageType)) {
        //   alert('Sorry, only images are allowed')
        //   return
        // }
      
        // if (myImage.size > (100*1024)) {
        //   alert('Sorry, the max allowed size for images is 100KB')
        //   return
        // }
        const formData = new FormData()
        formData.append('myFile', files[0])
        console.log(files[0].name)
        await axios.post('http://localhost:3001/saveImage', formData)
        console.log(formData)
        // fetch('/saveImage', {
        //   method: 'POST',
        //   body: formData
        // })
        // .then(response => response.json())
        .then(data => {
          console.log(data.data.path)
        })
        .catch(error => {
          console.error(error)
        })
      }
      

    return posts ? (
        <div className='main-page'>
        <VerticalNav vertUsername={vertUsername} setVertUsername={setVertUsername} vertId={vertId} setVertId={setVertId}/>
        <div className='feed'>
            <div className='post-form'>
               <form onSubmit={handleSubmit}>
                
                 <div className='post-username-section'>
                    <div className="formUserIcon">
                        <div>
                            <h3 className='post-username'>{vertUsername}</h3>
                         </div>
                         <div>
                             <img className='post-user-icon' src="src/images/userTwo.png" alt="user icon" />
                          </div>
                    </div>
                    <div>
                       <textarea type="text" value={formState.description} onChange={handleChange} id='description' placeholder="What's your style?"/>
                    </div>
                </div>

                <div className='form-bottom-buttons'>
                   <div onClick={handleImageClick}
                       className="upload">
                        <img src='./src/images/upload.png'
                        style={{ cursor: 'pointer' }} />
                        <input type='file' 
                        ref={inputRef}
                        onChange={(event)=> {
                            handleImageUpload(event)
                           }}
                        style={{ display: 'none' }}></input>
                   </div>
                   <div>
                        <input className='submit-button-form' type="submit" />
                    </div>
                </div>
            </form> 
            </div>
     {posts.map((post, idx) =>(
 <div key={idx} className='post'>
    <div className='top-post'>
      
    
         <div className='post-username-section'>
               <img className='post-user-icon' src="src/images/user-icon.png" alt="user icon" />
                {/* {posts[posts.length-(idx+1)].username.username ? <h3 className='post-username'>{posts[posts.length-(idx+1)].username.username}</h3> : null} */}
               <h3 className='post-username'>{posts[posts.length-(idx+1)].username.username}</h3>
           </div>
           <div>
              <button className='delete-button' onClick={() => handlePostDelete(posts[posts.length-(idx+1)]._id)}>x</button>
           </div>
   
  </div>
  <div className="descriptionNImage">
          <div className="postDescription">
             <p>{posts[posts.length-(idx+1)].description}</p>
          </div>
          <div>
              <img className='product-image' src={ posts[posts.length-(idx+1)].image}/>
          </div>
    </div>
     <div className='reaction-bar'>
             <div>
                <img className='like-button reaction-image' onClick={() => {
                    handleLike(posts[posts.length-(idx+1)]._id, idx)
                }} src="src/images/heart.png" alt='like'/>
              </div>
              <div>
                <span className='likes'>{ posts[posts.length-(idx+1)].likes }</span>
              </div>
              <div>
                <img className='comment-button reaction-image' onClick={()=>{
                    showComments(idx)}} src="src/images/comment.png" alt='comment'/>
              </div>
    </div>
               
     <div className='write-comment-section'>
            <div>
                <img className='nav-icon' src="src/images/user.png" alt="user-icon" />
            </div>
            <div className="write-comment">
                <input className='comment-bar' onChange={handleCommentChange} placeholder='Write your comment here...'></input>
            </div>
            <div>
                <button className='comment-submit' onClick={()=>{
                    createComment(posts[posts.length-(idx+1)]._id, idx)
                    showCommentsOnSubmit(idx)
                    }}><img src="src/images/commentButton.png"/></button>
             </div>
     </div>
     <div className='comment-list-section'>
         <div className='comment-list-line'></div>
             <div className='comment-list'>
                    {posts[posts.length-(idx+1)].comments.map((comment,idx)=>(
                        <div key={idx} className='comment-with-icon'>
                        <img className='nav-icon' src="src/images/user.png" alt="user-icon" />
                        <p className='comment'>{comment}</p> 
                       </div>
                    ))}
             </div>
          </div>
     </div>
            ))}
         
   </div>
        
</div>
    ): console.log('not loading')
}