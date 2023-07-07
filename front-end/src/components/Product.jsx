import UserContext from "../UserContext"
import React, { useState, useContext, useEffect, useRef } from 'react'
import axios from 'axios'

export default function Product () {

    const { products, setProducts } = useContext(UserContext)


    console.log(products)
    let initialState = {
        username: '',
        cost: '',
        image:''
    }
    const [formState, setFormState] = useState(initialState)

    // console.log(formState)

   const handleChange  = event => {
      setFormState({...formState, [event.target.id]: event.target.value})
   }

   const handleSubmit = event => {
     event.preventDefault()

     const postNewProduct = async() => {
        const response = await axios.post(`http://localhost:3001/api/product`, {...formState, username:formState.username, cost:formState.cost })

      setProducts([...products, response.data])
        location.reload()
     }
     postNewProduct()
    }

   const deleteProduct = async(productId) => {
    const response = await axios.delete(`http://localhost:3001/api/product/${productId}`)

    setProducts(products.filter((product) => product._id != productId))
   }
   const inputRef = useRef(null)
   const [image, setImage] = useState('')

   const handleImageClick = (event) => {
      inputRef.current.click()
   }

   function handleImage(e) {
    const file = e.target.files[0]
    console.log(file)
    setImage(file)
   }
//add to cart function section 



const [selected, setSelected] = useState(null) 


  const addToCart = async (product) => {

    const cartItem = {
                          username: product.username,
                          image: product.image,
                          cost: product.cost
                     }
                   
   const response = await axios.post(`http://localhost:3001/api/cart`, cartItem)
    //  console.log(response.data)
    
  }
    const [cart, setCart] = useState([])
  const getCart = async () => {
    const response = await axios.get(`http://localhost:3001/api/cart`)
    setCart(response.data.carts)
  }

  useEffect(() => {
    getCart()
  }, [])

 

  const isProductIncart = (product) => {
    console.log('hello');
    let result = false;
    for (let i = 0; i < cart.length; i++) {
      console.log(cart[i].username, product.username);
      if (cart[i].cost === product.cost) {
        result = true;
      }
      console.log(result);
    }
    return result;
  };
  




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
                          
                   <div onClick={handleImageClick}
                       >
                      <img src='./src/images/upload.png'/>
                      <input type="file"
                           ref={inputRef}
                           onChange={handleImage}
                           value={image}
                           style={{ display: 'none' }}
                            />
                   </div>
                   <input type='submit'></input>
                    

                </form>
            </div>

         <div>
               {products.slice().reverse().map((product, idx) => {

                return (
                <div className="post"
                 
                      key={idx}
                      id={idx}>
                    <h2>{product.username}</h2>
                    <img src={product.image}/>
                    <p>{product.cost}</p>
                    { isProductIncart(product) ? 
                    <button disabled>Sold Out</button>
                    :
                    <button onClick={() => addToCart( product)}>Add To Cart</button>
                    }
                    <button onClick={() => deleteProduct(product._id)}>delete</button>
                </div>
                )
       })}

      </div>
   </div>
    
)
}