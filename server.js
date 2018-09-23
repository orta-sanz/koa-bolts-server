const Koa = require('koa')
const mongo = require('koa-mongo')
const mongoose = require('mongoose')

const boltRouter = require('./routes/bolt.router')

mongoose.set('debug', true)
mongoose.Promise = Promise

function onDBReady(err) {
  if(err) {
    console.log('Error Database', err)
    process.exit(1)
  }

  const app = new Koa()

  app.use(boltRouter.routes()).listen(3000)
}

mongoose.connect('mongodb://localhost:27017/bolts_db', onDBReady)
