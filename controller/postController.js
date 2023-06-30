const { Post } = require('../models')

const getAllPosts = async(req,res) => {
    try{
        const posts = await Post.find()
        return res.send(200).json({ posts })
    }catch(e){
        return res.status(500).send(e.message)
    }
}

const getPost = async(req,res) => {
    try{
        const { id } = req.params
        const post = await Post.findById(id)
        if (post){
            return res.status(200).json({ post })
        } else {
            return res.status(400).send(e.message)
        }
    } catch(e){
        return res.status.send(e.message)
    }
}

const createPost = async(req,res) => {
    try{
        const post = new Post(req.body)
        await post.save()
        return res.status(200).json({ post })                     
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const updatePost = async(req,res) => {
    try{
        const { id } = req.params
        const post = await Post.findByIdAndUpdate(id,req.body,{new:true})
        if (post){
            return res.status(200).json({ post })
        } else {
            return res.status(400).send('Post not found')
        }
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const deletePost = async(req,res) => {
    try {
        const { id } = req.params
        const post = await Post.findByIdAndDelete(id)
        if (post){
            return res.status(200).json({ post })
        } else {
            return res.status(400).send('Product not found')
        }
    } catch(e){
        return res.status(500).send(e.message)
    }
}

export default {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost
}
