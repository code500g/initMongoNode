const express = require('express')
const cors = require('cors')
const app = express()

require('./plugins/db')

//解决跨域
app.use(cors())
//express内置的post参数解析
app.use(express.urlencoded({ extended: false }))

const apiRouter = require('./routes/admin')
app.use('/api', apiRouter)

app.listen(6500, function () {
  console.log('fe api is runing at port 6500');
})
