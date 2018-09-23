const KoaBody = require('koa-body')
const KoaRouter = require('koa-router')

const BoltService = require('../services/bolt.service')

const router = new KoaRouter({
  prefix: '/bolt'
})

class BoltRoute {
  static async getAll(ctx) {
    console.log('Get all bolts')
    ctx.status = 200
    ctx.type = 'application/json'
    ctx.body = await BoltService.findAll()
  }

  /**
   * Create bolt
  */
  static async create(ctx) {
    console.log('Creating bolt with data', ctx.request.body)
    ctx.body = await BoltService.create(ctx.request.body)
  }
}

router.get('/', BoltRoute.getAll)
router.post('/', KoaBody(), BoltRoute.create)

module.exports = router
