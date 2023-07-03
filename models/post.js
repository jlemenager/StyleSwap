const { Schema } = require('mongoose')

const postSchema = new Schema (
    {
      username: {type: String, required: true},
      image: {type: String, required: false},
      description: {type: String, required: true},
      products: {type: String, required: false},
      likes: {type: Number, required: false},
      comments: {type: Array, required: false},
      isLive: {type: Boolean, required: false}
    },
    {
       timestamps: true
    }
)

module.exports = postSchema