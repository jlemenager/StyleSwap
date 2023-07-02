
import UserContext from './UserContext'
import axios from 'axios'
import Home from './components/Home'
import Nav from './components/Nav'
import './App.css'
import { useState, useEffect } from 'react'


function App() {

  const [posts, setPosts] = useState([])


  useEffect(()=>{
    const getPostsAPI = async() =>{
      const response = await axios.get('http://localhost:3001/api/post')
      console.log(response)
      setPosts(response.data)
    }
    
    getPostsAPI()
  },[])
  
  return (
   <div>
    <UserContext.Provider value={ { posts, setPosts } }>
      <Home />
      <Nav />
    </UserContext.Provider>

    
   </div>
  )
}

export default App
