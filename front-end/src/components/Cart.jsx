import React, {useContext} from "react"
import UserContext from "../UserContext"
import { useState } from "react"

export default function Cart({ selected }) {

const [cart, setCart] = useState([])



 console.log(selected)

 const addToCart = () => {
    let cartItem = ([...cart, selected])
    setCart(cartItem)
 }

 
const { cartItems, setCartItems} = useContext(UserContext)

    return(
        <div>
            <h2>{selected}</h2>
            <h3></h3>
           
        </div>
    )
}