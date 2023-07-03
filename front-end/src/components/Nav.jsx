import { Link, Routes, Route } from 'react-router-dom'
import Home from './Home'

export default function Nav () {
    return(
        <div className='nav-links'>
            <Link to='/'>Home</Link>
            <Link to='/search'>Search</Link>
            <Link to='/product'>Marketplace</Link>
            <Link to='/login'>Login</Link> 
            <Link to='/cart'>Cart</Link>
        </div>
    )
}