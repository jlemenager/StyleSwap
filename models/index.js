const mongoose = require('mongoose')

const commentSchema = require('./comment')
const postSchema = require('./post')
const productSchema = require('./product')
const userInfoSchema = require('./user')

const Comment = mongoose.model('Comment', commentSchema)
const Post = mongoose.model('Post', postSchema)
const Product = mongoose.model('Product', productSchema)
const UserInfo = mongoose.model('UserInfo', userInfoSchema)

module.exports = {
    Comment,
    Post,
    Product,
    UserInfo
 
}