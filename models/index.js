const mongoose = require('mongoose')

const postSchema = require('./post')
const productSchema = require('./product')
const userInfoSchema = require('./user')


const Post = mongoose.model('Post', postSchema)
const Product = mongoose.model('Product', productSchema)
const UserInfo = mongoose.model('UserInfo', userInfoSchema)


module.exports = {
    Post,
    Product,
    UserInfo
}