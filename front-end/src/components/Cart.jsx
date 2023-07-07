import React, { useEffect } from "react"
import { useState } from "react"
import axios from "axios"


export default function Cart() {

    const [cart, setCart] = useState([])

    
      console.log(cart)

    const getCart = async () => {

        const response = await axios.get(`http://localhost:3001/api/cart`)
        // const cartItem = response.data
        setCart(response.data.carts)
    }
    
   useEffect(() => {
      getCart()
   }, [])

 

   const deleteCart = async (itemId) => {

     const response = await axios.delete(`http://localhost:3001/api/cart/${itemId}`)
     setCart( cart.filter((item) => item._id !== itemId ) )
   }

   const [updatedCost, setUpdatedCost] = useState(0)

   useEffect(() => {
    const updateOrderSummary = () => {
        let totalPrice = 0
        cart.forEach(item => {
        totalPrice += item.cost 
     });
       setUpdatedCost(parseFloat(totalPrice)) 
    
   }
   updateOrderSummary()
   }, [cart])


    return(
       <div>
           <h3>cart page</h3>
           {cart.map(item => (
             <div key={item._id}>
                <p>{item.username}</p>
                <img src={item.image}/>
                <p>{item.cost}</p>
                <button onClick={() => deleteCart(item._id)}>delete</button>
            </div>
           ))}
           <h1>Order Summary</h1>
          <h2>${updatedCost}</h2>
       </div>

      
    )
}