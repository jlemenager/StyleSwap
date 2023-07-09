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
import LogInPage from './components/LogInPage'
import LogOutPage from './components/LogOutPage'
import './App.css'
import Footer from './components/Footer'


function App() {

  const [posts,setPosts] = useState([])

  const [products, setProducts] = useState([])

  const [vertUsername, setVertUsername] = useState('')
  const [vertId, setVertId] = useState('')

  const getPostsAPI = async() =>{
    const response = await axios.get('http://localhost:3001/api/post')
    setPosts(response.data.posts)
  }

  useEffect(()=>{
    localStorage.setItem('userId', JSON.stringify(vertId))
    localStorage.setItem('username', JSON.stringify(vertUsername))
  },[vertUsername,vertId])

  // useEffect(()=>{
  //   JSON.parse(localStorage.getItem('userId'))
  //   JSON.parse(localStorage.getItem('username')) 
  // },[])

  useEffect(()=>{
    getPostsAPI()
  },[])

  useEffect(() => {
    const getProduct = async() => {
      const response = await axios.get(`http://localhost:3001/api/product`)
      setProducts(response.data.products)
    }
    getProduct()
  }, [])
  
  return (
   <div className='App'>
    <UserContext.Provider value={{ posts,
                                   setPosts,
                                   products,
                                   setProducts,
                                   getPostsAPI,
                                   vertUsername,
                                   setVertUsername,
                                   vertId,
                                   setVertId
                                }}>
       <header>Find your favorite styles and recycle clothing at the same time</header>
       <Nav />

       <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/login' element={<LogIn/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/signup' element={<SignUP/>}/>
          <Route path='/loginpage' element={<LogInPage/>}/>
          <Route path='/logoutpage' element={<LogOutPage/>}/>
       </Routes>
       
       <Footer/>
    </UserContext.Provider>
  
   </div>
  )
}

export default App