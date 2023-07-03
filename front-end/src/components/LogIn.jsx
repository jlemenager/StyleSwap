import { Link } from 'react-router-dom'

export default function LogIn() {
    return(
       
             <div className="loginContainer">
              <h1 className="headinglogin">Log In</h1>
             <p>New to this site?<Link to='/signup'>SignUp</Link></p>
             <button className="google"><img src="src/images/google.png"/>Log In with Google</button>
             <button className="upfb"><img src="src/images/fb.png"/>Log In with Facebook</button>
             <div className="or">
            <p>
              <span></span>
              or
             <span></span>
            </p>
           </div>
               <button className="semail">Log In with email</button>
         </div>
    )
}