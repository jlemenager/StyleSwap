const { UserInfo } = require('../models')

const getAllUsers = async(req,res) => {
    try{
        const users = await UserInfo.find()
        return res.status(200).json({ users })
    } catch(e){
        return res.status(500).send(e.message)
    }
}

const getUser = async(req,res) => {
    try {
        const { id } = req.params
        const user = await UserInfo.findById(id)
        if (user){
            return res.status(200).json({ user })
        } else {
            return res.status(400).send('User not found')
        }
    } catch (e){
        return res.status(500).send(e.message)
    }
}

const createUser = async(req,res) => {
    try{
        const user = new UserInfo(req.body)
        await user.save()
        return res.status(200).json({ user })
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const updateUser = async(req,res) => {
    try {
        const { id } = req.params
        const user = await UserInfo.findByIdAndUpdate(id, req.body, {new:true})
        if (user){
            res.status(200).json({ user })
        } else {
            res.status(400).send('User doesnt exist')
        }
    } catch(e){
        res.status(500).send(e.message)
    }
}

const deleteUser = async(req,res) => {
    try{
        const { id } = req.params
        const user = await UserInfo.findByIdAndDelete(id)
        if(user){
            return res.status(200).json({ user })
        } else {
            return res.status(400).send('User doesnt exist')
        }
    } catch(e){
        return res.status(500).send(e.message)
    }
}

export default {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}