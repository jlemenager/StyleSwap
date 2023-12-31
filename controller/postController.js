const { Post } = require('../models')
const db = require('../db')
// const cloudinary = require('../utils/Cloudinary')


const getAllPosts = async(req, res) => {
    try{
        const posts = await Post.find()
        // .populate({path: 'username', select: 'username'})
         res.status(200).json({ posts })
    } catch (error){
         res.status(500).send(error.message)
    }

}

const getPost = async(req,res) => {
    try{
        const { id } = req.params
        const post = await Post.findById(id)
        if(!post) throw Error('Post not found')
        res.json({ post })
    }catch (error) {
        return res.status(500).send(error.message)
    }
}

const createPost = async(req,res) => {
    // const { username,description,image,likes,comments} = req.body
    try{
        // const result = await cloudinary.uploader.upload(image, {
        //     folder: 'posts'
        // })
        const post = new Post(req.body)
        await post.save()
        // const post = await Post.create({
        //     username,
        //     description,
        //     image:{
        //         public_id: result.public_id,
        //         url: result.secure_url
        //     },
        //     likes, 
        //     comments
        // })
        return res.status(200).json({ post })
    } catch(error){
        return res.status(500).send(error.message)
    }
}

const updatePost = async(req,res) => {
    try{
        let { id } = req.params
        let post = await Post.findByIdAndUpdate(id, req.body, { new: true })
        if (post) {
            return res.status(200).json(post)
        }
         throw new Error('Post not found')
    } catch (error){
       return res.status(500).send(error.message)
    }
} 

const deletePost = async(req, res) => {
    try{
        const { id } = req.params
        const deleted = await Post.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Post deleted')
        }
        throw new Error('post not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const addLikeToPost = async (req, res) => {
    try {
        const { id } = req.params
        const post = await Post.findById(id)
        if(!post) throw Error('Post not found')

        post.likes++
        await post.save()

        res.json({ post })

    } catch (error) {
        res.status(500).send(error.message)
    }
}

const unLikeToPost = async (req, res) => {
    try {
        const { id } = req.params
        const post = await Post.findById(id)
        if(!post) throw Error('Post not found')

        post.likes--
        await post.save()
         
        res.json({ post })
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const uploadImage = async (req, res) => {
    try{
        if(!req.files || Object.keys(req.files.length === 0)) {
        return res.status(400).json({ message: 'No image file provided' })
        }
        const image = req.files.image
        return res.status(200).json({ message: 'Image uploaded successfully' })

    }catch(error) {
        console.error('Error uploading image:', error)
        return res.status(500).json({ message: 'Image upload failed'})
    }
}

const getComments = async(req, res) => {
    try{
        let { comments } = req.params
        const comment = await Post.find(comments)
    } catch (e) {
        res.status(500).send(e.message)
    }
}

// const createComment = async(req,res) => {
//     try{
//         let comment = new Post(req.body.comment)
//         await comment.save()
//     } catch(e){
//         res.status(500).send(e.message)
//     }
// }

const createComment = async(req,res) => {
    try{
        let { id } = req.params
        let post = await Post.findByIdAndUpdate(id,req.body,{new:true})
        if (post) {
            return res.status(200).json(req.body.commentState)
        }
         throw new Error('Post not found')
    } catch (error){
       return res.status(500).send(error.message)
    }
} 

module.exports = {
    getAllPosts,
    getPost,
    createPost,
    updatePost,
    deletePost,
    addLikeToPost,
    unLikeToPost,
    uploadImage,
    getComments,
    createComment
}
