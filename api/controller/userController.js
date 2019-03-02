const mongoose = require("mongoose")
const User = mongoose.model('User')

const userSignUp = async function (data) {
    let user = new User()
    user.userName = data.userName
    user.email = data.email
    user.password = data.password
    user = await user.save()
    return { user: user }
}

const checkLogin = async function(data){
    let user = await User.findOne({email: data.email})
    if (!user){
        return {message: 'Invalid email or password'}
    }
    if (data.password !== user.password){
        return {message: 'Invalid email or password'}
    }
    user.password= ''
    return {
        user: user,
        message: 'Login successfully'
    }
}

module.exports = {
    userSignUp: userSignUp,
    checkLogin: checkLogin
}