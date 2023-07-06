import React from "react"
import { useState } from "react"


export default function Cart() {
    const [filteredCart, setFilteredCart] = useState('')

    const storedProduct = JSON.parse(localStorage.getItem('cartItems'))

   const deleteCart = (idx) => {
      const  updatedCartItem = storedProduct.filter((item, index) => index !== idx)
       localStorage.setItem('cartItems', JSON.stringify(updatedCartItem))
       setFilteredCart(updatedCartItem)
   }

   let totalPrice = 0

   const [updatedCost, setUpdatedCost] = useState(0)
 const updateOrderSummary = () => {
        storedProduct.cost.forEach(total => {
    const totalPrice = total.cost * item.quantity
       setUpdatedCost(totalPrice)
       
    });
    updateOrderSummary()
 }
 
  
// console.log(storedProduct)
    return(
       <div>
           {storedProduct.slice().reverse().map((store, idx) => (
             <div key={idx}>
               <h2>{store.username}</h2>
               <p>{store.cost}</p>
               <img src={store.image}/>
               <button onClick={() => deleteCart(idx)}>delete</button>
            </div>
           ))}

           <div className="total">
               <h3>Total</h3> 
                <h4>{updatedCost}</h4>
           </div>
       </div>

      
    )
}