const { Schema } = require('mongoose')

const productSchema = new Schema (
    {
      username: {type: String, required: true},
      image: {type: String, required: false},
      cost: {type: Number, required: true},
      isLive: {type: Boolean, required: false}
    },
    {
       timestamps: true
    }
)

module.exports = productSchema