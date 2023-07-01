const db = require('../db')
const { Comment } = require('../models')


const getAllComments = async(req, res) => {
    try{
        const comments = await Comment.find()
         res.status(200).json({ comments })
    } catch (error){
         res.status(500).send(error.message)
    }

}

const getComment = async(req,res) => {
    try{
        const { id } = req.params
        const comment = await Comment.findById(id)
        if(!comment) throw Error('Coffee not found')
        res.json({ comment })
    }catch (error) {
        return res.status(500).send(error.message)
    }
}

const createComment = async(req,res) => {
    try{
        const comment = new Comment(req.body)
        await comment.save()
        return res.status(200).json({ comment })
    } catch(error){
        return res.status(500).send(error.message)
    }
}

const updateComment = async(req,res) => {
    try{
        let { id } = req.params
        let comment = await Comment.findByIdAndUpdate(id, req.body, { new: true })
        if (comment) {
            return res.status(200).json(comment)
        }
         throw new Error('Flight not found')
    } catch (error){
       return res.status(500).send(error.message)
    }
} 

const deleteComment = async(req, res) => {
    try{
        const { id } = req.params
        const deleted = await Comment.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('Comment deleted')
        }
        throw new Error('comment not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getAllComments,
    getComment,
    createComment,
    updateComment,
    deleteComment
}