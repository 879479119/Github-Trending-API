let mongoose = require('mongoose')
let url  = require('../config')

mongoose.connect(url)

let db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.on('connected', function () {
	console.log('Mongoose connection open to ' + url)
})

/**
 * 连接异常
 */
db.on('error',function (err) {
	console.log('Mongoose connection error: ' + err)
})

/**
 * 连接断开
 */
db.on('disconnected', function () {
	console.log('Mongoose connection disconnected')
})

module.exports =  mongoose