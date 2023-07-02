import { useState } from 'react'
import Home from './components/Home'

import './App.css'
import { useCallback } from 'react'
import { useContext } from 'react'

function App() {
    
    const [post, setPost] = useState([])

    
  return (
   <div>
     <Home/>
   </div>
  )
}

export default App
