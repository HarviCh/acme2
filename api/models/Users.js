const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Users = mongoose.model('User', new Schema({
    name: String,
    nit: String,
    email: String,
    password: String,
    salt: String,
    cellphone: Number,
    landline: Number,
    age: Number,
    gender: String,
    department: String,
    city: String,
    neighborhood: String,
    address: String,
    role: {type: String, default: 'user'},//medico, secretario, administrado
}))

module.exports = Users