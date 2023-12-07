const mongoose = require('mongoose')

const subjectSchema = new mongoose.Schema({
  title: { type: String },
  type: { type: Number },
  state: { type: Number },
  grade: { type: Number },
  content: { type: String }
}, { versionKey: false })
// versionKey 不显示版本字段

module.exports = mongoose.model('subject', subjectSchema, 'subject')
//第三个参数，指定集合名。省略则匹配subject。
