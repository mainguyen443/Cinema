let mongoose= require("mongoose")
let Schema = mongoose.Schema

let User = new Schema({
    userName: {
        type: String,
        default: ''
    },
    email: {
        type: String,
        default: ''
    },
    password: {
        type: String,
        default: ''
    },
    createtime:{
        type: Number,
        default: Date.now,
        min: 0
    }
})

module.exports= mongoose.model('User', User)