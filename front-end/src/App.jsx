import { useState,useEffect,useContext } from 'react'
import UserContext from './UserContext'
import { Routes,Route } from 'react-router-dom'
import axios from 'axios'
import Home from './components/Home'
import Nav from './components/Nav'
import LogIn from './components/LogIn'
import Cart from './components/Cart'
import Search from './components/Search'
import Product from './components/Product'
import SignUP from './components/SignUp'

import './App.css'

function App() {

  const [posts,setPosts] = useState([])

  useEffect(()=>{
    const getPostsAPI = async() =>{
      const response = await axios.get('http://localhost:3001/api/post')
      setPosts(response.data.posts)
    }
    getPostsAPI()
  },[])
  

  const [products, setProducts] = useState([])

  useEffect(() => {
    const getProduct = async() => {
      const response = await axios.get(`http://localhost:3001/api/product`)
      setProducts(response.data.products)
    }

    getProduct()
  }, [])


  return (
   <div>
    <UserContext.Provider value={{ posts,
                                   setPosts,
                                   products,
                                   setProducts 
                                }}>
       <Nav />
      

       <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/signup' element={<SignUP/>}/>
       </Routes>
     
    </UserContext.Provider>
   
   </div>
  )
}

export default App