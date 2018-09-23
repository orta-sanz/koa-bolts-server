const BoltModel = require('../models/bolt.model')

class BoltService {
  async findAll()  {
    return await BoltModel.find()
  }

  async create(data) {
    const bolt = new BoltModel(data)
    await bolt.save()
    return bolt
  }
}

module.exports = new BoltService()
