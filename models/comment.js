const { Schema } = require('mongoose')

const commentSchema = new Schema (
    {
      username: {type: String, required: true},
      comment: {type: String},
      isLive: {type: Boolean, required: true},
      postId: {type: Number }
    },
    {
       timestamps: true
    }
)

module.exports = commentSchema;