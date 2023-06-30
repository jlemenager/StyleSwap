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
            username: "jane_smith",
            password: "secret456",
            profileimage: "profile2.jpg",
            cost: 15.49,
            isLoggedIn: true,
            isSeller: true,
            
          },
          {
            username: "user123",
            password: "password789",
            profileimage: "profile3.jpg",
            cost: 9.99,
            isLoggedIn: false,
            isSeller: false, 
          },
          {
            username: "testuser",
            password: "testpass",
            profileimage: "profile4.jpg",
            cost: 5.99,
            isLoggedIn: true,
            isSeller: true,
            
          },
          {
            username: "guest",
            password: "guestpass",
            profileimage: "profile5.jpg",
            cost: 12.99,
            isLoggedIn: false,
            isSeller: false
   
          },
          {
            username: "user456",
            password: "secure789",
            profileimage: "profile6.jpg",
            cost: 8.49,
            isLoggedIn: true,
            isSeller: true
            
          },
          {
            username: "user789",
            password: "password123",
            profileimage: "profile7.jpg",
            cost: 6.99,
            isLoggedIn: false,
            isSeller: false
            
          },
          {
            username: "newuser",
            password: "newpass",
            profileimage: "profile9.jpg",
            cost: 3.99,
            isLoggedIn: false,
            isSeller: false

            
          },
          {
            username: "user790",
            password: "password1299",
            profileimage: "profile8.jpg",
            cost: 9.99,
            isLoggedIn: false,
            isSeller: false
            
          },
          {
            username: "user999",
            password: "password999",
            profileimage: "profile10.jpg",
            cost: 7.99,
            isLoggedIn: true
            
          }

    ]

    await userinfoSchema.de
}