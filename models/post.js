const { Schema } = require('mongoose')

const postSchema = new Schema (
    {
      username: {type: String, required: true},
      image: {type: String, required: true},
      description: {type: String, required: true},
      products: {type: String, required: true},
      likes: {type: Number, required: true},
      comments: {type: Number, required: true},
      isLive: {type: Boolean, required: true}
    },
    {
       timestamps: true
    }
)

module.exports = postSchema