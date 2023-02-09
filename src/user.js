const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserShema = new Schema({
  name: String
})

const User = mongoose.model('user', UserShema)
module.exports = User