const mongoose = require('mongoose')

const IP = 'localhost'
const PORT = 27017
//修改数据库名称
const DB_NAME = 'fe'

//连接
mongoose.connect(`mongodb://${IP}:${PORT}/${DB_NAME}`, {
  useNewUrlParser: true
})

//连接成功
mongoose.connection.on('connected', () => {
  console.log('Mongoose connection success')
})

//连接异常
mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error:' + err)
})

//连接成功
mongoose.connection.on('disconnected', () => {
  console.log('Mongoose connection disconnected')
})

module.exports = mongoose
