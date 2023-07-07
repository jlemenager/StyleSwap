const { Cart } = require('../models')
const db = require('../db')


const getAllCarts = async (req, res) => {
    try{
      const carts = await Cart.find().populate({path: 'username', select: 'username'})
       res.status(200).json({ carts })
    }catch(error){
         res.status(500).send(error.message)
    }
}

const getCart = async (req, res) => {
    try{
       const { id } = req.params
       const cart = await Cart.findById(id)
       if(!cart) throw Error ('cart not found')
       res.json({ cart })
    }catch{
       return res.status(500).send(error.message)
    }
}

const createCart = async (req, res) => {
    try{
        const cart = new Cart(req.body)
        await cart.save()
        return res.status(200).json({ cart })
    }catch{
        return res.status(500).send(error.message)
    }
}

const updateCart = async(req,res) => {
    try{
        let { id } = req.params
        let cart = await Cart.findByIdAndUpdate(id, req.body, { new: true })
        if (cart) {
            return res.status(200).json(cart)
        }
         throw new Error('cart not found')
    } catch (error){
       return res.status(500).send(error.message)
    }
}

const deleteCart = async(req, res) => {
    try{
        const { id } = req.params
        const deleted = await Cart.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Cart deleted')
        }
        throw new Error('Cart not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllCarts,
    getCart,
    createCart,
    updateCart,
    deleteCart
}



