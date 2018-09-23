const mongoose = require('mongoose')

const Bolt = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  reference: { type: String, required: true, trim: true },
  category: { type: String, required: true, trim: true },
  createdAt: { type: Date, required: true, default: Date.now }
})

const BoltModel = mongoose.model('Bolt', Bolt)
module.exports = BoltModel
