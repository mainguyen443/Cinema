let mongoose= require("mongoose")
let Schema = mongoose.Schema

let Movie = new Schema({
    name: {
        type: String,
        default: ''
    },
    genre:{
        type: String,
        default: ''
    },
    release:{
        type: Number,
        default: 0
    },
    description:{
        type: String,
        default: ''
    },
    image:{
        type: String,
        default: ''
    },
    createtime:{
        type: Number,
        default: Date.now,
        min: 0
    }
})

module.exports= mongoose.model('Movie', Movie)