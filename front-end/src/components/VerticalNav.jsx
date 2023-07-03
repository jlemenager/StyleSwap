import { Link, Routes, Route } from 'react-router-dom'
import Home from './Home'

export default function Nav () {
    return(
        <div className='nav-links-vertical'>
            <div className='nav-link-vertical'><Link to='/login'><img className='nav-logo-vert account-link-vert' src="src/images/user-icon.png" alt="user-icon" /> Your Username</Link></div>
            <div className='nav-link-vertical'><Link to='/home'><img className='nav-logo-vert home-link-vert' src="src/images/newsfeed.png" alt="newsfeed" /> Newsfeed</Link></div>
            <div className='nav-link-vertical'><Link to='/search'><img className='nav-logo-vert search-link-vert' src="src/images/search.png" alt="search" /> Search</Link></div>
            <div className='nav-link-vertical'><Link to='/product'><img className='nav-logo-vert marketplace-link-vert' src="src/images/marketplace.png" alt="marketplace" /> Marketplace</Link></div>
        </div>
    )
}