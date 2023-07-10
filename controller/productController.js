const { Product } = require('../models')
const db = require('../db')


const getAllProducts = async(req,res) => {
    try{
        const products = await Product.find()
        // .populate({path: 'username', select:'username'})
        return res.status(200).json({ products })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const getProduct = async(req,res) => {
    try{
        const { id } = req.params
        const product = await Product.findById(id)
        if(!product) throw Error('Product not found')
        res.json({ product })
    }catch (error) {
        return res.status(500).send(error.message)
    }
}

const createProduct = async(req,res) => {
    try{
        const product = new Product(req.body)
        await product.save()
        return res.status(200).json({ product })
    } catch(error){
        return res.status(500).send(error.message)
    }
}

const updateProduct = async(req,res) => {
    try{
        let { id } = req.params
        let product = await Product.findByIdAndUpdate(id, req.body, { new: true })
        if (product) {
            return res.status(200).json(product)
        }
         throw new Error('Product not found')
    } catch (error){
       return res.status(500).send(error.message)
    }
} 

const deleteProduct = async(req, res) => {
    try{
        const { id } = req.params
        const deleted = await Product.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Product deleted')
        }
        throw new Error('comment not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    getAllProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}