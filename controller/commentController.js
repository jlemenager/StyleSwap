const { Comment } = require('../models')

const getAllComments = async(req,res) => {
    try{
        const comments = await Comment.find()
        return res.status(200).json({ comments })
    } catch (e){
        return res.status(500).send(e.message)
    }

}

const getComment = async(req,res) => {
    try{
        const { id } = req.params
        const comment = await Comment.findById(id)
        if (comment){
            return res.status.json({ comment })
        } else {
            return res.status.send('Comment not found')
        }
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const createComment = async(req,res) => {
    try{
        const comment = new Comment(req.body)
        await comment.save()
        return req.status(200).json({ comment })
    } catch(e){
        return req.status(500).send(e.message)
    }
}

const updateComment = async(req,res) => {
    try{
        const { id } = req.params
        const comment = await Comment.findByIdAndUpdate(id,req.body,{new:true})
        if (comment){
            return res.status(200).json({ comment })
        } else {
            return res.status(400).send('This comment doesnt exist')
        }
    } catch(e){
        return res.status(500).send(e.message)
    }
} 

const deleteComment = async(req,res) => {
    try{
        const { id } = req.params
        const comment = await Comment.findByIdAndDelete(id)
        if(comment){
            return res.status(200).json({ comment })
        } else {
            return res.status(400).send('This comment doesnt exist')
        }
    } catch(e){
        return res.status(500).send(e.message)
    }
}

export default {
    getAllComments,
    getComment,
    createComment,
    updateComment,
    deleteComment
}