const { Schema } = require('mongoose')

const postSchema = new Schema (
    {
      profileimage: {type: String, required: false},
      //added this
      username: {type: String, required: false},
      // {type: Schema.Types.ObjectId, ref:'UserInfo'}
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