const db = require('../db')
const { Comment } = require('../models/index')
const { Post } = require('../models/index')
const { Product } = require('../models/index')
const { UserInfo } = require('../models/index')
const { Cart } = require('../models/index')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const userinfo = [
         {
            username: "john_doe",
            password: "pass123",
            profileimage: "https://images.pexels.com/photos/3755918/pexels-photo-3755918.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            isLoggedIn: true,
            isSeller: false
          },
          {
            username: "jane_smith",
            password: "secret456",
            profileimage: "https://images.pexels.com/photos/8113893/pexels-photo-8113893.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            isLoggedIn: true,
            isSeller: true,
            
          },
          {
            username: "user123",
            password: "password789",
            profileimage: "https://images.pexels.com/photos/5126585/pexels-photo-5126585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            isLoggedIn: false,
            isSeller: false, 
          },
          {
            username: "testuser",
            password: "testpass",
            profileimage: "https://images.pexels.com/photos/16671612/pexels-photo-16671612/free-photo-of-portrait-of-a-man-in-a-blue-t-shirt.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            isLoggedIn: true,
            isSeller: true,
            
          },
          {
            username: "guest",
            password: "guestpass",
            profileimage: "https://images.pexels.com/photos/3790492/pexels-photo-3790492.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            isLoggedIn: false,
            isSeller: false
   
          },
          {
            username: "user456",
            password: "secure789",
            profileimage: "https://images.pexels.com/photos/7562076/pexels-photo-7562076.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            isLoggedIn: true,
            isSeller: true
            
          },
          {
            username: "user789",
            password: "password123",
            profileimage: "https://images.pexels.com/photos/5240247/pexels-photo-5240247.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            isLoggedIn: false,
            isSeller: false
            
          },
          {
            username: "newuser",
            password: "newpass",
            profileimage: "https://images.pexels.com/photos/10958897/pexels-photo-10958897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            isLoggedIn: false,
            isSeller: false

            
          },
          {
            username: "user790",
            password: "password1299",
            profileimage: "https://images.pexels.com/photos/10761393/pexels-photo-10761393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            isLoggedIn: false,
            isSeller: false
            
          },
          {
            username: "user999",
            password: "password999",
            profileimage: "https://images.pexels.com/photos/7077368/pexels-photo-7077368.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            isLoggedIn: true
            
          }
 
    ]

    await UserInfo.deleteMany()
    await UserInfo.insertMany(userinfo)


    const post = [
        {
            username: "john_doe",
            image: "https://images.pexels.com/photos/1040173/pexels-photo-1040173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: "Avid traveller and nature lover. Sharing my adventures around the world!",
            products: "Backpack, hiking shoes, camera",
            likes: 0,
            comments: ['amazing', 'perfect'],
            isLive: true
          },
          
          {
            username: "jane_smith",
            image: "https://images.pexels.com/photos/852860/pexels-photo-852860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: "Food enthusiast. Exploring new recipes and culinary delights!",
            products: "Cookware set, recipe book, apron",
            likes: 0,
            comments: ['amazing', 'perfect'],
            isLive: false
          },
          
          {
            username: "user123",
            image: "https://images.pexels.com/photos/4066288/pexels-photo-4066288.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: "Health and fitness enthusiast. Inspiring others to lead an active lifestyle.",
            products: "Gym equipment, protein supplements, workout clothes",
            likes: 0,
            comments: ['amazing', 'perfect'],
            isLive: true
          },
          
          {
            username: "testuser",
            image: "https://images.pexels.com/photos/14180011/pexels-photo-14180011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: "Passionate about fashion and style. Sharing the latest trends and outfits!",
            products: "Dresses, handbags, sunglasses",
            likes: 0,
            comments: ['amazing', 'perfect'],
            isLive: true
          },
          
          {
            username: "guest",
            image: "https://images.pexels.com/photos/8396717/pexels-photo-8396717.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: "Adorable pets and animal lover. Spreading love and care for furry friends!",
            products: "Pet toys, pet food, grooming supplies",
            likes: 0,
            comments: ['amazing', 'perfect'],
            isLive: false
          },
          
          {
            username: "user456",
            image: "https://images.pexels.com/photos/11590844/pexels-photo-11590844.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: "Technology enthusiast. Unboxing and reviewing the latest gadgets!",
            products: "Smartphones, laptops, headphones",
            likes: 0,
            comments: ['amazing', 'perfect'],
            isLive: true
          },
          
          {
            username: "user789",
            image: "https://images.pexels.com/photos/15932407/pexels-photo-15932407/free-photo-of-woman-in-stylish-clothes-posing-near-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: "Lover of art and creativity. Showcasing various art forms and talented artists!",
            products: "Paintbrushes, canvases, art prints",
            likes: 0,
            comments: ['amazing', 'perfect'],
            isLive: false
          },
          
          {
            username: "admin",
            image: "https://images.pexels.com/photos/11049239/pexels-photo-11049239.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: "Creating beautiful living spaces and providing inspiration for home decoration!",
            products: "Wall art, decorative pillows, furniture",
            likes: 0,
            comments: ['amazing', 'perfect'],
            isLive: true
          },
          
          {
            username: "newuser",
            image: "https://images.pexels.com/photos/12595572/pexels-photo-12595572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: "Avid reader and book lover. Recommending must-read novels and literary gems!",
            products: "Bestselling books, book accessories, bookmarks",
            likes: 0,
            comments: ['amazing', 'perfect'],
            isLive: true
          },
          
          {
            username: "user999",
            image: "https://images.pexels.com/photos/12599037/pexels-photo-12599037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            description: "Melodies that touch the soul. I am sharing my passion for music and favourite tunes!",
            products: "Headphones, vinyl records, musical instruments",
            likes: 0,
            comments: ['amazing', 'perfect'],
            isLive: false
          }
          
    ]
    await Post.deleteMany()
    await Post.insertMany(post)

    const product = [
        {
            username: "john_doe",
            image: "https://images.pexels.com/photos/6764007/pexels-photo-6764007.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            cost: 20.99,
            isLive: true
          },
          
          {
            username: "jane_smith",
            image: "https://images.pexels.com/photos/8594503/pexels-photo-8594503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            cost: 15.49,
            isLive: false
          },
          
          {
            username: "user123",
            image: "https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
            cost: 9.99,
            isLive: true
          },
          
          {
            username: "testuser",
            image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=810&q=80",
            cost: 5.99,
            isLive: true
          },
          
          {
            username: "guest",
            image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
            cost: 12.99,
            isLive: false
          },
          
          {
            username: "user456",
            image: "https://images.unsplash.com/photo-1467043237213-65f2da53396f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            cost: 8.49,
            isLive: true
          },
          
          {
            username: "user789",
            image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80",
            cost: 6.99,
            isLive: false
          },
          
          {
            username: "admin",
            image: "https://images.unsplash.com/photo-1554568218-0f1715e72254?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            cost: 0.99,
            isLive: true
          },
          
          {
            username: "newuser",
            image: "https://images.unsplash.com/photo-1520591799316-6b30425429aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            cost: 3.99,
            isLive: true
          },
          
          {
            username: "user999",
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            cost: 7.99,
            isLive: false
          }
          
    ]
    await Product.deleteMany()
    await Product.insertMany(product)

    const cart = [
      {
            username: "testuser",
            image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=810&q=80",
            cost: 5.99,
      },
      {
            username: "user999",
            image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            cost: 7.99,
      },
      {
            username: "newuser",
            image: "https://images.unsplash.com/photo-1520591799316-6b30425429aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80",
            cost: 3.99,
      }
    ]
    await Cart.deleteMany()
    await Cart.insertMany(cart)

}

const run = async () => {
    await main()
    db.close()

}
 run()