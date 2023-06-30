const { Product } = require('../models')

const getAllProducts = async(req,res) => {
    try{
        const products = await Product.find()
        return res.status(200).json({ users })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const getProduct = async(req,res) => {
    try{
        const { id } = req.params
        const product = await Product.findById(id)
        if (product) {
            return res.status(200).json({ product })
        } else {
            return res.status(400).send('Product doesnt exist')
        }
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const createProduct = async(req,res) => {
    try{
        const product = new Product(req.body)
        await product.save()
        return res.status(200).json({ user })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const updateProduct = async(req,res) => {
    try{
        const { id } = req.params
        const product = await Product.findByIdAndUpdate(id)
        if(product){
            return res.status(200).json({ product })
        } else {
            return res.status(400).send('Product not found')
        }
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const deleteProduct = async(req,res) => {
    try{
        const { id } = req.params
        const product = await Product.findByIdAndDelete(id)
        if(product){
            return res.status(200).json({ product })
        } else {
            return res.status(400).send('Product not found')
        }
    } catch(e){
        return res.status(500).send(e.message)
    }
}

export default {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}