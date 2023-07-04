import UserContext from "../UserContext"
import React, { useState, useContext, useEffect } from 'react'
import axios from 'axios'

export default function Product () {

    const { products, setProducts } = useContext(UserContext)

    console.log(products)
    let initialState = {
        username: '',
        cost: ''
    }
    const [formState, setFormState] = useState(initialState)

    console.log(formState)

   const handleChange  = event => {
      setFormState({...formState, [event.target.id]: event.target.value})
   }

   const handleSubmit = event => {
     event.preventDefault()

     const postNewProduct = async() => {
        const response = await axios.post(`http://localhost:3001/api/product`, {...formState, username:formState.username, cost:formState.cost})

        const newProduct = response.data

        setProducts([newProduct, ...products])
        // setProducts(response.data.products)
       
        location.reload()
     }
     postNewProduct()
     setFormState(initialState)
     
   }



    return(
        <div className="mainContainer">
            <div>
                <h1>Be a Seller</h1>
                <form onSubmit={handleSubmit}>
                    <label>Username:</label>
                    <input onChange={handleChange}
                           value={formState.username}
                           id='username'
                           type="text"/>
                    <label>cost:</label>
                    <input onChange={handleChange}
                            value={formState.cost}
                            id='cost'
                            type='text'/>
                    <input type="submit" />

                </form>
            </div>

         <div>
               {products.map((product, idx) => (
                <div className="post"
                      key={idx}>
                    <h2>{products[products.length-(idx+1)].username}</h2>
                    <img src={products[products.length-(idx+1)].image}/>
                    <p>{products[products.length-(idx+1)].cost}</p>
                    <button>Add To Cart</button>
                </div>
               ))}
            </div>
        </div>
    )
}