const { Schema } = require('mongoose')

const productSchema = new Schema (
    {
      username: {type: String, required: false},
      image: {type: String, required: false},
      cost: {type: Number, required: false},
      isLive: {type: Boolean, required: false}
    },
    {
       timestamps: true
    }
)

module.exports = productSchema