import UserContext from '../UserContext'
import { useContext, useState } from 'react'
import { Link, Routes, Route } from 'react-router-dom'
import Home from './Home'

export default function Nav ({ vertUsername, setVertUsername }) {
    return(
        <div className='nav-links-vertical'>
             <Link to='/login' className='vert-link nav-link-vertical'><img className='nav-logo-vert account-link-vert' src="src/images/user-icon.png" alt="user-icon" />{vertUsername}</Link>
             <Link to='/' className='vert-link nav-link-vertical'><img className='nav-logo-vert home-link-vert' src="src/images/home.png" alt="newsfeed" /> Newsfeed</Link>
             <Link to='/search' className='vert-link  nav-link-vertical'><img className='nav-logo-vert search-link-vert' src="src/images/heroSearch.png" alt="search" /> Search</Link>
             <Link to='/product' className='vert-link nav-link-vertical'><img className='nav-logo-vert marketplace-link-vert' src="src/images/marketplace-vert-link.png" alt="marketplace" /> Marketplace</Link>
        </div>
    )
}