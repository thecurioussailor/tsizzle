const { User } = require('../db');
const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config')

function userMiddleware(req, res, next) {

    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    try{
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        req.username = decodedValue.username;
        if(decodedValue.username){
            next();
        } else {
            res.status(403).json({
                message: "problem in authentication"
            })
        }
      } catch(e) {
            res.status(403).json({
              msg: "You are not authenticated!"
             });
        }
    
}

module.exports = userMiddleware;