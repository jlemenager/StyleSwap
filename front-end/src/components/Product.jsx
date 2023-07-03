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

   const handleSubmit = e

    return(
        <div>
            
        </div>
    )
}