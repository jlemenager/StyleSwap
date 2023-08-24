const { DATABASE_URL } = require("../config");
const mongoose = require('mongoose')

mongoose
  .connect(DATABASE_URL)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })
mongoose.set('debug', true)

const db = mongoose.connection

module.exports = db
