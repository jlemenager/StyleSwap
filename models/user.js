const { Schema } = require('mongoose')

const userInfoSchema = new Schema (
    {
      username: {type: String, required: true},
      password: {type: String, required: true},
      profileImage: {type: String, required: false},
      isLoggedIn: {type: Boolean, required: false},
      isSeller: {type: Boolean, required:false}
    },
    {
       timestamps: true
    }
)

module.exports = userInfoSchema