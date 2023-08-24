import { Link, Routes, Route } from 'react-router-dom'
import { useContext } from 'react'
import UserContext from '../UserContext'
import Home from './Home'
import heroSearch from '../images/heroSearch.png'
import home from '../images/home.png'
import logo from '../images/logo.png'
import cart from '../images/cartt.png'
import product from '../images/product.png'

export default function Nav () {
    const { userFile, setUserFile, handleUserImageUpload } = useContext(UserContext)
    return(
        <div className='nav-links'>
            <div className='right-title'>
                   <Link to='/home'><img className='logo' src={logo} alt="logo" /></Link>
                   <Link to='/home'><h1 className='nav-title'>StyleSwap</h1></Link>
            </div>
        
            <div className='center-links'>
                 <Link to='/home'><img src={home}/></Link>
                 <Link to='/product'><img className='nav-icon marketplace' src={product}/></Link>
            </div>

            <div className='left-title'>
                <Link to='/cart'><img className='nav-icon left cart' src={cart} alt="cart" /></Link>
                 <Link to='/'><img className='nav-icon left login' src={userFile} alt="user-icon" /></Link> 
            </div>
        </div>
    )
}