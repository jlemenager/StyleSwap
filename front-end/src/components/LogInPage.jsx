import { useEffect, useState } from 'react'
import axios from 'axios'
export default function LoginPage(){
    const [usernameFormState, setUsernameFormState] = useState('')
    const [passwordFormState, setPasswordFormState] = useState('')
    const [userInfo, setUserInfo] = useState({
        username: usernameFormState,
        password: passwordFormState
    })

    const usernameHandleChange = (event) => {
        setUsernameFormState(event.target.value)
        console.log(usernameFormState)
    }

    const passwordHandleChange = (event) => {
        setPasswordFormState(event.target.value)
        console.log(passwordFormState)
    }

    const handleSubmit = async(event) => {
        event.preventDefault()
        const response = await axios.get(`http://localhost:3001/api/userinfo`)
        setUserInfo({
            username: usernameFormState,
            password: passwordFormState
        })
        const checkIfRealAccount = async() => {
            console.log(response.data.users.length)
            for (let i = 0;i<response.data.users.length;i++){
                console.log(response)
                if (userInfo.password == response.data.users[i].password && userInfo.username == response.data.users[i].username){
                    const putRequest = await axios.put(`http://localhost:3001/api/userinfo/${response.data.users[i]._id}`, {...userInfo, isLoggedIn: true})
                    alert(`Hello ${response.data.users[i].username}, you are logged in!`)
                }  
            }
        }
        checkIfRealAccount()
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Username</label>
            <input onChange={usernameHandleChange} type="text" />
            <label>Password</label>
            <input onChange={passwordHandleChange} type="text" />
            <input type="submit" />
        </form>
    )
}