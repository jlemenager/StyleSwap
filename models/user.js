const { Schema } = require('mongoose')

const userInfoSchema = new Schema (
    {
      username: {type: String, required: true},
      password: {type: String, required: true},
      profileImage: {type: String, required: false},
      cost: {type: String, required: true},
      isLoggedIn: {type: Boolean, required: true},
      isSeller: {type: Boolean}
    },
    {
       timestamps: true
    }
)

module.exports = userInfoSchema