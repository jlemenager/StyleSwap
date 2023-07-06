import React from "react"
import { useState } from "react"


export default function Cart() {
    const [filteredCart, setFilteredCart] = useState('')

    const storedProduct = JSON.parse(localStorage.getItem('cartAll'))

    console.log(storedProduct)

   const deleteCart = (idx) => {
      const  updatedCartItem = storedProduct.filter((item, index) => index !== idx)
       localStorage.setItem('cartAll', JSON.stringify(updatedCartItem))
       setFilteredCart(updatedCartItem)
   }

  

   const [updatedCost, setUpdatedCost] = useState(0)
//    console.log(storedProduct)

   const updateOrderSummary = () => {
         let totalPrice = 0
         storedProduct.forEach(item => {
         totalPrice = item.cost * item.quantity
        
      });
     setUpdatedCost(totalCost) 
     updateOrderSummary()
   }
    

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