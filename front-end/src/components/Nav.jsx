import { Link, Routes, Route } from 'react-router-dom'
import Home from './Home'

export default function Nav () {
    return(
        <div className='nav-links'>
            <Link to='/'><img className='logo' src="src/images/logo.png" alt="logo" /></Link>
            <div className='center-links'>
            <Link to='/home'><img className='nav-icon center home' src="src/images/newsfeed.png" alt="newsfeed" /></Link>
            <Link to='/search'><img className='nav-icon center search' src="src/images/search.png" alt="search" /></Link>
            <Link to='/product'><img className='nav-icon center marketplace' src="src/images/marketplace.png" alt="marketplace" /></Link>
            </div>
            <div className='login-links'>
            <Link to='/cart'><img className='nav-icon left cart' src="src/images/cart.png" alt="cart" /></Link>
            <Link to='/login'><img className='nav-icon left login' src="src/images/user-icon.png" alt="user-icon" /></Link> 
            </div>
        </div>
    )
}