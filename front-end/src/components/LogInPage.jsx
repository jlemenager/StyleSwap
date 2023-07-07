import { useEffect, useState } from 'react'
import axios from 'axios'
export default function LoginPage(){
    const [usernameFormState, setUsernameFormState] = useState('')
    const [passwordFormState, setPasswordFormState] = useState('')
    const [userInfo, setUserInfo] = useState({
        username: '',
        password: ''
    })

    const usernameHandleChange = (event) => {
        setUsernameFormState(event.target.value)
        console.log(usernameFormState)
    }

    const passwordHandleChange = (event) => {
        setPasswordFormState(event.target.value)
        console.log(passwordFormState)
    }

    useEffect(()=>{
        setUserInfo({
            username: usernameFormState,
            password: passwordFormState
        })
    },[usernameFormState,passwordFormState])

    const handleSubmit = async(event) => {
        event.preventDefault()
        const response = await axios.get(`http://localhost:3001/api/userinfo`)
        const checkIfRealAccount = async() => {
            for (let i = 0;i<response.data.users.length;i++){
                if (userInfo.password == response.data.users[i].password && userInfo.username == response.data.users[i].username){
                    const putRequest = await axios.put(`http://localhost:3001/api/userinfo/loginpage/${response.data.users[i]._id}`, {...userInfo, isLoggedIn: true})
                    alert(`Hello ${response.data.users[i].username}, you are logged in!`)
                }  
            }
        }
        checkIfRealAccount()
    }
    return(
        <form onSubmit={handleSubmit} className='loginContainer logIn'>
            <h1 className='headinglogin'>Log In</h1>
            <label>Username:</label>
            <input className='logInInput' onChange={usernameHandleChange} type="text" placeholder='Username'/>
            <label>Password:</label>
            <input className='logInInput' onChange={passwordHandleChange} type="text" placeholder='Password' />
            <input className='logInSubmit' type="submit" />
        </form>
    )
}