import { useState,useEffect,useContext } from 'react'
import UserContext from './UserContext'
import { Routes,Route } from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import Nav from './components/Nav'

import './App.css'

function App() {

  const [posts,setPosts] = useState([])
  console.log(posts)

  useEffect(()=>{
    const getPostsAPI = async() =>{
      const response = await axios.get('http://localhost:3001/api/post')
      setPosts(response.data.posts)
    }
    getPostsAPI()
  },[])
  
  return (
   <div>
    <UserContext.Provider value={{ posts,setPosts }}>
      <Home />
      <Nav />
    </UserContext.Provider>
    {/* <Routes>
      <Route path='/' element={<Home />}/>
    </Routes> */}
   </div>
  )
}

export default App
