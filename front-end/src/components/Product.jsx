import UserContext from "../UserContext"
import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

export default function Product () {

    const { products, setProducts } = useContext(UserContext)

    let initialState = {
        username: '',
        cost: ''
    }
    const [formState, setFormState] = useState(initialState)

   const handleChange  = event => {
      setFormState({...formState, [event.target.id]: event.target.value})
   }

   const handleSubmit = event => {
     event.preventDefault()

     const postNewProduct = async() => {
        const response = await axios.post(`http://localhost:3001/api/product`, {...formState})
     }
   }



    return(
        <div>
            <div>
                <form>
                    <label>Username:</label>
                    <input onChange={handleChange}
                           id='username'
                           type="text"/>
                    <label>cost:</label>
                    <input />
                </form>
            </div>
        </div>
    )
}