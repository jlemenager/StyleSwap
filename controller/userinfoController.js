const { UserInfo } = require('../models')
const db = require('../db')

const getAllUsers = async(req, res) => {
    try{
        const users = await UserInfo.find()
         res.status(200).json({ users })
    } catch (error){
         res.status(500).send(error.message)
    }

}

const getUser = async(req,res) => {
    try{
        const { id } = req.params
        const user = await UserInfo.findById(id)
        if(!user) throw Error('Userinfo not found')
        res.json({ user })
    }catch (error) {
        return res.status(500).send(error.message)
    }
}

const createUser = async(req,res) => {
    try{
        const user = new UserInfo(req.body)
        await user.save()
        return res.status(200).json({ user })
    } catch(error){
        return res.status(500).send(error.message)
    }
}

const updateUser = async(req,res) => {
    try{
        let { id } = req.params
        let user = await UserInfo.findByIdAndUpdate(id, req.body, { new: true })
        if (user) {
            return res.status(200).json(user)
        }
         throw new Error('User not found')
    } catch (error){
       return res.status(500).send(error.message)
    }
} 

const deleteUser = async(req, res) => {
    try{
        const { id } = req.params
        const deleted = await UserInfo.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send('User deleted')
        }
        throw new Error('User not found')
    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}