const { Schema } = require ('mongoose')

const cartSchema = new Schema (
    {
        username: {type: Schema.Types.ObjectId, ref:'UserInfo'},
        image: {type: String, required: false},
        description: {type: String, required: false},
        cost: {type: Number, required: false},
        quantity: {type: Number, default: 1}
    },
    {
        timestamps: true
    }
)

module.exports = cartSchema