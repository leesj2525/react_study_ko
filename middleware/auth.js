const {User} = require('../models/User')

let auth = (req, res, next) => {
    //인증처리 하는곳

    // 클라이언트 쿠키에서 토큰을 가져옴
    let token = req.cookie.x_auth;
    
    // 그후 토큰을 복호화해서 유저를 찾음
    User.findByToken()
    // 유저가 있으면 인증 ok, 없다면 인증 no


}

module.exports = {auth};