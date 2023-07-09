const { Schema } = require('mongoose')

const productSchema = new Schema (
    {
      username: {type: Schema.Types.ObjectId, ref:'UserInfo'},
      image: {type: String, required: false},
      cost: {type: Number, required: false},
      isLive: {type: Boolean, required: false}
    },
    {
       timestamps: true
    }
)

module.exports = productSchema