const db = require('../db')
const { commentSchema } = require('../models')
const { postSchema } = require('../models')
const { productSchema } = require('../models')
const { userinfoSchema } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const userinfo = [
         {
            username: "john_doe",
            password: "pass123",
            profileimage: "profile1.jpg",
            cost: 20.99,
            isLoggedIn: true,
            isSeller: false
            
          },
          {

          },
          {

          },
          
    ]
}