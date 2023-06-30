const { Schema } = require('mongoose')

const commentSchema = new Schema (
    {
      username: {type: String, required: true},
      isLive: {type: Boolean, required: true},
      postId: {type: Number }
    },
    {
       timestamps: true
    }
)

module.exports = commentSchema