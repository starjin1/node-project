const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type:String,
        maxlength:50
        },
    email: {
        type:String,
        trin:true,    
        // ex)pahk 1115@naver.com ==> pahk1115@naver.com 으로 바꿔줌(공백 제거 기능)
        unique:1
    },
    password: {
        type:String,
        minlength:5
    },
    lastname: {
        type:String,
        maxlength: 50
    },
    role: {
        type:Number,
        default:0
    },
    image:String,
    token: {
        type:String
        // 유효성 관리에 필요, id나 비밀번호 사용자 인증할 때 필요
    },
    tokenExp: {
        type:Number
        // 토큰 유효성(사용할 수 있는) 기간 
    }
})

const User = mongoose.model('User',userSchema)
module.exports = {}
// 다른곳에도 써줄 수 있게 해줌 