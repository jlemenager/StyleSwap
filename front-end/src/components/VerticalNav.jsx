import { Link, Routes, Route } from 'react-router-dom'
import Home from './Home'

export default function Nav () {
    return(
        <div className='nav-links-vertical'>
            <Link to='/login' className='vert-link nav-link-vertical'><img className='nav-logo-vert account-link-vert' src="src/images/user-icon-vert-link.png" alt="user-icon" /> Your Username</Link>
            <Link to='/home' className='vert-link nav-link-vertical'><img className='nav-logo-vert home-link-vert' src="src/images/newsfeed-vert-link.png" alt="newsfeed" /> Newsfeed</Link>
            <Link to='/search' className='vert-link nav-link-vertical'><img className='nav-logo-vert search-link-vert' src="src/images/searchbar-vert-link.png" alt="search" /> Search</Link>
            <Link to='/product' className='vert-link nav-link-vertical'><img className='nav-logo-vert marketplace-link-vert' src="src/images/marketplace-vert-link.png" alt="marketplace" /> Marketplace</Link>
        </div>
    )
}