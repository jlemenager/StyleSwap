const db = require('../db')
const { Comment } = require('../models/index')
const { Post } = require('../models/index')
const { Product } = require('../models/index')
const { UserInfo } = require('../models/index')

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

    await UserInfo.deleteMany()
    await UserInfo.insertMany(userinfo)


    const post = [
        {
            username: "john_doe",
            image: "image1.jpg",
            description: "Avid traveller and nature lover. Sharing my adventures around the world!",
            products: "Backpack, hiking shoes, camera",
            likes: 500,
            comments: [ 50],
            isLive: true
          },
          
          {
            username: "jane_smith",
            image: "image2.jpg",
            description: "Food enthusiast. Exploring new recipes and culinary delights!",
            products: "Cookware set, recipe book, apron",
            likes: 1200,
            comments: [ 30],
            isLive: false
          },
          
          {
            username: "user123",
            image: "image3.jpg",
            description: "Health and fitness enthusiast. Inspiring others to lead an active lifestyle.",
            products: "Gym equipment, protein supplements, workout clothes",
            likes: 800,
            comments: [30 ],
            isLive: true
          },
          
          {
            username: "testuser",
            image: "image4.jpg",
            description: "Passionate about fashion and style. Sharing the latest trends and outfits!",
            products: "Dresses, handbags, sunglasses",
            likes: 1500,
            comments: [ 70],
            isLive: true
          },
          
          {
            username: "guest",
            image: "image5.jpg",
            description: "Adorable pets and animal lover. Spreading love and care for furry friends!",
            products: "Pet toys, pet food, grooming supplies",
            likes: 900,
            comments: [ 40],
            isLive: false
          },
          
          {
            username: "user456",
            image: "image6.jpg",
            description: "Technology enthusiast. Unboxing and reviewing the latest gadgets!",
            products: "Smartphones, laptops, headphones",
            likes: 2000,
            comments: [100 ],
            isLive: true
          },
          
          {
            username: "user789",
            image: "image7.jpg",
            description: "Lover of art and creativity. Showcasing various art forms and talented artists!",
            products: "Paintbrushes, canvases, art prints",
            likes: 700,
            comments: [25 ],
            isLive: false
          },
          
          {
            username: "admin",
            image: "image8.jpg",
            description: "Creating beautiful living spaces and providing inspiration for home decoration!",
            products: "Wall art, decorative pillows, furniture",
            likes: 1000,
            comments: [ 60],
            isLive: true
          },
          
          {
            username: "newuser",
            image: "image9.jpg",
            description: "Avid reader and book lover. Recommending must-read novels and literary gems!",
            products: "Bestselling books, book accessories, bookmarks",
            likes: 600,
            comments: [ 35],
            isLive: true
          },
          
          {
            username: "user999",
            image: "image10.jpg",
            description: "Melodies that touch the soul. I am sharing my passion for music and favourite tunes!",
            products: "Headphones, vinyl records, musical instruments",
            likes: 1800,
            comments: [80 ],
            isLive: false
          }
          
    ]
    await Post.deleteMany()
    await Post.insertMany(post)

    const product = [
        {
            username: "john_doe",
            image: "image1.jpg",
            cost: 20.99,
            isLive: true
          },
          
          {
            username: "jane_smith",
            image: "image2.jpg",
            cost: 15.49,
            isLive: false
          },
          
          {
            username: "user123",
            image: "image3.jpg",
            cost: 9.99,
            isLive: true
          },
          
          {
            username: "testuser",
            image: "image4.jpg",
            cost: 5.99,
            isLive: true
          },
          
          {
            username: "guest",
            image: "image5.jpg",
            cost: 12.99,
            isLive: false
          },
          
          {
            username: "user456",
            image: "image6.jp",
            cost: 8.49,
            isLive: true
          },
          
          {
            username: "user789",
            image: "image7.jpg",
            cost: 6.99,
            isLive: false
          },
          
          {
            username: "admin",
            image: "image8.jpg",
            cost: 0.99,
            isLive: true
          },
          
          {
            username: "newuser",
            image: "image9.jpg",
            cost: 3.99,
            isLive: true
          },
          
          {
            username: "user999",
            image: "image10.jpg",
            cost: 7.99,
            isLive: false
          }
          
    ]
    await Product.deleteMany()
    await Product.insertMany(product)



}

const run = async () => {
    await main()
    db.close()

}
 run()